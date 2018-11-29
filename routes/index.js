var express = require('express');
var router = express.Router();
var passport = require('passport');
var csrf = require('csurf');

var Product = require('../models/product'); 

var csrfProtection = csrf();

router.use(csrfProtection);
/* GET home page. */
router.get('/', function(req, res, next) {
  Product.find(function(err, docs) {
    var productChunks = [];
    var chunkSize = 3;
    for (var i = 0; i < docs.length; i += chunkSize) {
      productChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render('shop/index', { title: 'shopping cart', products: productChunks});
  });
  
});

router.get('/user/signup', function(req, res, next){
    var messages = req.flash('error');
    res.render('user/signup', {csrfToken: req.csrfToken(), messages: messages, hasErrors: messages.length > 0});
});

router.post('/user/signup', passport.authenticate ('local.signup',{
    sucessRedirect: '/user/profile',
    failureRedirect: '/user/signup',
    failureFlash: true
}));

router.get('/user/profile', function(req, res, next){
  res.render('user/profile');
})

module.exports = router;