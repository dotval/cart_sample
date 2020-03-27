const express = require('express');
const router = express.Router();
const products = require('../models/index').products;
const purchases = require('../models/index').purchases;
const dateUtils = require('date-utils');

/* GET products listing. */
router.get('/', function(req, res, next) {

  if (!req.user) {
    res.redirect('/users/sign_in');
  }

  req.session.cart = [1, 1, 2, 1, 3];

  const cart = req.session.cart;
  let amount = {};

  // リストない重複を排除
  const productIdList = cart
      .filter((x, i, self) => self.indexOf(x) === i);
  
  for (var i in cart) {
    var key = cart[i];
    amount[key] = (amount[key])? amount[key] + 1 : 1;
  }
  
  const options = {
    where: { id: productIdList }
  };

  products.findAll(options).then((results) => {
    res.render('cart/index', { cart: results, amount: amount });
  });
});

router.post('/confirm', function(req, res, next) {

  if (!req.user) {
    res.redirect('/users/sign_in');
  }

  const cart = req.session.cart;
  let amount = {};

  if (!cart) {
    res.redirect('/products');
  }

  // リストない重複を排除
  const productIdList = cart
      .filter((x, i, self) => self.indexOf(x) === i);
  
  for (var i in cart) {
    var key = cart[i];
    amount[key] = (amount[key])? amount[key] + 1 : 1;
  }
  
  const options = {
    where: { id: productIdList }
  };

  products.findAll(options).then((results) => {
    res.render('cart/confirm', { cart: results, amount: amount });
  });
});

router.post('/finish', function(req, res, next) {

  if (!req.user) {
    res.redirect('/users/sign_in');
  }

  const cart = req.session.cart;
  let amount = {};

  if (!cart) {
    res.redirect('/products');
  }

  for (var i in cart) {
    var key = cart[i];
    amount[key] = (amount[key])? amount[key] + 1 : 1;
  }

  for (let [k, v] in amount) {
    k = Number(k);
    const options = {
      where: { id: k }
    };
    products.findOne({where: { id: k }}).then((product) => {
      const param = {
        product_id: k,
        user_id: req.user.id,
        price: product.price,
        amount: amount[k]
      };

      purchases.create(param);
    });
  }
  delete req.session.cart;
  res.render('cart/finish');
});

module.exports = router;
