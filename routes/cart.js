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

  const cart = req.session.cart;
  let amount = {};

  if (!cart) {
    res.render('cart/index', { cart: null, amount: null });
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

  for (let k in amount) {
    k = Number(k);
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

router.post('/:productId/', function(req, res) {
  
  if (!req.user) {
    res.redirect('/users/sign_in');
  }

  const id      = Number(req.params.productId),
        amount  = Number(req.body.amount),
        cart    = req.session.cart,
        options = {
          where: {
            id: req.params.productId,
            public_flg: 1
          }
        };
  let error = '';

  let currentAmount = {};
  for (var i in cart) {
    var key = cart[i];
    currentAmount[key] = (currentAmount[key])? currentAmount[key] + 1 : 1;
  } 

  products.findOne(options).then((product) => {
    if (amount == 0 || isNaN(amount)) {
      error = '個数を入力してください。';
    } else if (product.stock < amount + currentAmount[id]) {
      error = '在庫が足りませんでした。';
    }
    if (!error) {
      if (!req.session.cart) req.session.cart = [];
      for (let i = 0; i < amount; i++) {
        req.session.cart.push(id); 
      }
    }
    console.log(req.session.cart);
    
    res.render('products/show', { product: product, dateUtils: dateUtils, error: error });
  });
});

module.exports = router;
