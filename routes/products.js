const express = require('express');
const router = express.Router();
const db = require('../models/index');
const dateUtils = require('date-utils');

/* GET products listing. */
router.get('/', function(req, res, next) {
  const options = {
    where: { public_flg: 1 },
    order: [['createdAt', 'DESC']]
  };
  db.products.findAll(options).then((results) => {
    res.render('products/index', { products: results });
  });
});

/* GET products listing. */
router.get('/:productId/', function(req, res, next) {
  const options = {
    where: {
      id: req.params.productId,
      public_flg: 1
    },
    order: [['createdAt', 'DESC']]
  };
  db.products.findOne(options).then((results) => {
    res.render('products/show', { product: results, dateUtils: dateUtils, error: '' });
  });
});

module.exports = router;
