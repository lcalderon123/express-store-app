var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.title("Hello").render('add', { title: 'Add Item', active_page : req.originalUrl});
});

module.exports = router;
