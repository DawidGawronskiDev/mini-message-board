var express = require('express');
var router = express.Router();

const messages = require("../Messages")

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: "Mini Message Board", messages });
});

module.exports = router;
