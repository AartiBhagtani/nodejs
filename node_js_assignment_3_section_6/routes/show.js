const express = require('express');

const router = express.Router();

const prods = require('./user')
router.get('/show', (req, res, next) => {
  res.render('show', { pageTitle: 'show', prods: prods.product });
});

exports.route = router;
