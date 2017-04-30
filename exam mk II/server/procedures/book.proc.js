var db = require("../config/db");

exports.all = function() {
    console.log("firing book.proc");
    return db.rows('GetAllBooks', []);
}
exports.read = function(id) {
    console.log("firing GetSingleBook");
    return db.row('GetSingleBook', [id]);
}