var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('router!');
  res.render('index', { title: 'Express' });
});

router.get('/login', function (req, res, next) {
    console.log('user:' + req.query.user);
	console.log('upass:' + req.query.upass);
	res.json(['success', "服务器收到一个Ajax(get)请求，用户名为：" + req.query.user]);
});

router.post('/login', function (req, res, next) {
	console.log('user:' + req.body.user);
	console.log('upass:' + req.body.upass);
	res.json(['success', "服务器收到一个Ajax(post)请求，用户名为：" + req.body.user]);
});
module.exports = router;
