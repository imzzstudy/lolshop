var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/lolShop', {useNewUrlParser:true});
var db = mongoose.connection;
db.on('error', console.error);
db.once('open',function(){
  console.log("Connected to mongodb server");
});

var crypto = require('crypto');
var cipher = crypto.createCipher('aes-256-cbc','hiddenkey');

var userSchema = mongoose.Schema({

});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/login', function(req, res, next) {
  res.render('login');
});

router.post('/login', function(req,res,next){
  var lid = req.body['uid'];
  var lpwd = req.body['upwd'];



});


router.get('/join', function(req, res, next) {
  res.render('join');
});

router.get('/champion', function(req, res, next) {
  res.render('champion');
});

router.get('/skin', function(req, res, next) {
  res.render('skin');
});

router.get('/wardSkin', function(req, res, next) {
  res.render('wardSkin');
});

router.get('/serviceCenter', function(req, res, next) {
  res.render('serviceCenter');
});

module.exports = router;
