const express = require('express');
const router = express.Router();
const passport = require('passport');
const users = require('../models/index').users;
const bcrypt = require('bcrypt');

router.get('/sign_up', function(req, res) {
  res.render('users/sign_up');
});

router.post('/sign_up', function(req, res) {
  bcrypt.hash(req.body.password, 10, function (err, hashedPassword) {
    const param = {
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
      admin_flg: 0
    };
    users.create(param).then((user) => {
      req.login(user, function(err) {
      if (err) { return next(err); }
        return res.redirect('/products');
      });
    });
  });
});

router.get('/sign_in', function(req, res, next) {
  res.render('users/sign_in');
});

router.post('/sign_in', passport.authenticate('local', {
    successRedirect: '/products',
    failureRedirect: '/users/sign_in'
  }));

router.get('/sign_out', function(req, res) {
    req.logout();
    res.redirect('/');
});

module.exports = router;
