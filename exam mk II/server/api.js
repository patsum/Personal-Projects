var express = require("express");

var book = require("./controllers/book.ctrl");

var router = express.Router();

router.use('/books', book);
console.log('hit api.js')

module.exports = router;
