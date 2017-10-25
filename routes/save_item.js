var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
    console.log(req.body);
    res.title("Store Item").render('save_success', { title: 'Add Item', active_page : req.originalUrl});

});

module.exports = router;
