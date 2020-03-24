const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const productsRouter = require('./routes/products');
const users = require('./models/index').users;

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({ secret: 'keyboard cat' }));
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, done) => {
    done(null, user.id)
  });

passport.deserializeUser((id, done) => {
  users.findOne({
      where: { id: id }
    })
    .then(user => {
      done(null, user)
    })
    .catch(error => {
      done(error, null)
    });
  });

 passport.use(
    new LocalStrategy((username, password, done) => {
      users.findOne({
          where: { username: username }
        })
        .then(user => {
          if (!user) {
            return done(null, false, { message: 'メールアドレスまたはパスワードが正しくありません。' })
          }
          bcrypt.compare(password, user.password, function (err, result) {
            console.log(result);
            
            if (!result) {
              return done(null, false, { message: 'メールアドレスまたはパスワードが正しくありません。' })
            }

            return done(null, user)
          });
        })
        .catch(error => {
          return done(error)
        })
    })
  )

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
