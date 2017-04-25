var express = require("express");
// var posts = require("./controllers/posts.ctrl");
var item = require("./controllers/item.ctrl");
// var users = require("./controllers/users.ctrl");
// var donations= require("./controllers/donations.ctrl");

var router = express.Router();

// router.use('/posts', posts);
router.use('/item', item);
// router.use('/users', users);
// router.use('/donations', donations);
module.exports = router;
