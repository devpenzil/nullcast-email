var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { uname: 'John Deo' });
});

router.get('/email', (req, res, next) => {
  res.render('email', { uname: 'John Deo', description: 'Thank you for signing up for Nullcast. We’re really happy to have you! Please wait a while. This is because we have to approve your request.' })
})
module.exports = router;
