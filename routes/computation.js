var express=require('express')
var router=express.Router();
var randomNumber=Math.floor(Math.random()*100)+1

router.get('/', function(req, res, next) {
    res.render('computation', { Cr: `Cube root applied to ${randomNumber} is ${Math.cbrt(randomNumber)}` });
  });
  
  module.exports = router;

module.exports=router