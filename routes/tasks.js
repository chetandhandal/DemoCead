var express=require('express');
var router=express.Router();

router.get('/tasks',function(req, res, next){
    res.render('index.html');
});
router.get('/uploadResume',function(req, res, next){
    res.send('resumeuploaded');
});

module.exports=router;