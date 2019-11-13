'use strict';

const response = require('./response');
const connection = require('./conn');

exports.users = function (req, res) {
    connection.query("SELECT * FROM transaction_tbl", function (error, rows, fields) {
        if (error) {
            console.log(error);
        } else {
            response.ok(rows, res);
        }
    });
};

exports.add_user = function addTransaction(req, res) {
    const query = "INSERT INTO transaction_tbl (user_id, film_id, schedule_id, chair_no, virtual_acc) VALUES "
            + "(" + req.body.user + "," + req.body.film + "," + req.body.schedule + "," + req.body.chair + "," + req.body.va + ")"

    console.log("New sql edit to database")
    console.log(query)
    
    connection.query(query, function (error, rows, fields) {
        if (error) {
            console.log(error);
        } else {
            response.ok(rows, res);
        }
    });
}

exports.index = function(req, res) {
    response.ok("Hello from the NodeJS RESTful side!", res);  
};