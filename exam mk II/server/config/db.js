var mysql = require("mysql");

var pool = mysql.createPool({
    connectionLimit: 10,
    host: "localhost",
    user: "patrick",
    password: "powerpower",
    database: "test"
});

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