var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //console.log(req.route);
  res.title("Index Page").render('index', {pageTitle: "Store", active_page: req.route.path});
});

module.exports = router;
