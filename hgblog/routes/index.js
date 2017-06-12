var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/test',function(req,res,next){
    res.render('test',{title:'daheige'});
});
router.get('/user/:id',function(req,res){
    console.log(req);
    res.send('base url'+req.url+'user id '+req.params.id);
});
router.get('/getUser',function(req,res){
    // req.cookies.name = 'daheige';
    // res.cookie('username','daheige');
    console.log(req.hostname);
    console.log(req.ip);
    console.log(req.query);
    console.log(req.param('name'));
    console.log(req.cookies);
    res.send(req.cookies);
});
module.exports = router;
