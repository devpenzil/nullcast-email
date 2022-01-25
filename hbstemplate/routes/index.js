var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { uname: 'John Deo' });
});

router.get('/email', (req, res, next) => {
  res.render('email',{name: 'John Deo'})
})
module.exports = router;
