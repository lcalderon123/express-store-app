var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.title("Manage Page").render('manage', {pageTitle: "Manage", active_page: req.originalUrl});
});

module.exports = router;
