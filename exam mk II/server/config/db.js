var mysql = require("mysql");

var pool = mysql.createPool({
    connectionLimit: 10,
    host: "finalexamdb.crybll5rojww.us-east-1.rds.amazonaws.com",
port: 3306,
user: "student",
password: "covalence",
database: "CovalenceLibrary",
});

exports.pool = pool;


exports.empty = function (procedure, values) {
    return sendQuery(procedure, values).then(function () {
        return;
    })
};

exports.row = function (procedure, values) {
    return sendQuery(procedure, values).then(function (resultSets) {
        return resultSets[0][0];
    })
};

exports.rows = function (procedure, values) {
    return sendQuery(procedure, values).then(function (resultSets) {
        return resultSets[0];
    })
};

function sendQuery(procedure, values) {
    return new Promise(function (fulfill, reject) {
        pool.getConnection(function (err, connection) {
            if (err) {
                reject(err);
            } else {
                console.log('db callback');
                var queryString = "CALL " + procedure + parseParams(values.length);
                connection.query(queryString, values, function (err, resultSets) {
                    connection.release();
                    if (err) {
                        reject(err);
                    } else {
                        fulfill(resultSets);
                    }
                })
            }
        })
    })
}

function parseParams(amount) {
    var output = "";
    for (var i = 1; i <= amount; i++) {
        output += (i == amount ? "?" : "?, ");
    }
    return "(" + output + ")"
};