var express = require("express");
var procedures = require("../procedures/book.proc");

var router = express.Router();

router.get('/', function(req, res) {
    console.log("getting from ctrl.js");
    procedures.all().then(function(success){
        res.send(success);
    }, function(err){
        console.log(err);
        res.status(500).send(err);
    })
})
router.route('/:id')
    .get(function(req, res) {
        console.log("getting from id a single");
        procedures.read(req.params.id).then(function(success) {
            res.send(success);
        }, function(err) {
            console.log(err);
            res.status(500).send(err);
        })
    })
module.exports = router;