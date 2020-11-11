const express = require('express');

const router = express.Router();

const products = [];

router.get('/user', (req, res, next) => {
  res.render('users', { pageTitle: 'users'});
});

router.post('/user', (req, res, next) => {
  products.push(req.body.user)
  res.redirect('/show');
});

exports.route = router;
exports.product = products;
