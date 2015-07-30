var express = require('express');
var router = express.Router();

router.get('/reg', function(req, res, next) {
  res.render('user/reg',{
    title:"欢迎注册",
    err:req.flash('error').toString()
  });
});

router.post('/reg', function(req, res, next) {
    var username = req.body.username,
        password = req.body.password,
        email = req.body.email,
        password_repeat = req.body['password_repeat'];
    if(!username){
        req.flash('error','用户名不能为空');
        return res.redirect('back');
    }
    if(!password || password != password_repeat){
        req.flash('error','两次输入的密码不一致，请重新输入！');
        return res.redirect('back');
    }
  res.send(req.body);
});

module.exports = router;
