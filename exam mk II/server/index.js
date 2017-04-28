var express = require("express");
var mysql = require("mysql");
var bodyParser = require('body-parser');
var path = require("path");
var routeMw = require("./middleware/routing.mw");
var api = require('./api')

var app = express();

app.use(express.static(path.join(__dirname, "../client")));
app.use(bodyParser.json());

app.use('./api', api);
app.get("*", function(req, res, next) {
    if(routeMw.isAsset(req.url)) {
        next();
    } else {
        res.sendFile(path.join(__dirname, "../client/index.html"));
    }
})

app.listen(3000);
// console.log(api);