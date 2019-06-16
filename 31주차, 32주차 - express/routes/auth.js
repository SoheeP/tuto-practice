var express = require('express');
var router = express.Router();

/* GET home page. */
router.route('/login')
.get(function(req, res, next) {
  res.render('pages/login', { title: 'Express' });
})
.post(function(req, res, next){
  console.log('auth Login post')
  console.log(req.body)
  req.session.user = {
    name: req.body.username
  };
  console.log(req.session)
  res.redirect('/')
})


router.route('/logout')
  .get(function (req, res, next) {
    console.log('logout router get')
    if (req.session) {
      console.log('로그아웃 처리');
      req.session.destroy(function (err) {
          console.log('세션 삭제 성공');
          res.redirect('/')
        }
      );
    } else {
      console.log('로긴 안되어 있음');
      res.redirect('/');
    }
  });

module.exports = router;
