'use strict';

const response = require('./response');
const connection = require('./conn');

// Testing
exports.users = function(req, res) {
  connection.query(`SELECT * FROM 
  transaction_tbl`, function(error, rows, fields) {
    if (error) {
      console.log(error);
    } else {
      response.ok(rows, res);
    }
  });
};

// Adding a new transaction from user
exports.add_user = function addTransaction(req, res) {
  const query = `INSERT INTO transaction_tbl (user_id, 
    film_id, schedule_id, chair_no, virtual_acc) VALUES ` +
    '(' + req.body.user + ',' + req.body.film + ',' +
    req.body.schedule + ',' + req.body.chair +
    ',' + req.body.va + ')';

  console.log(query);

  connection.query(query, function(error, rows, fields) {
    if (error) {
      console.log(error);
    } else {
      response.ok(rows, res);
    }
  });
};

// Counting vacant seat
exports.get_vacant = function getVacantSeat(req, res) {
  const query = `SELECT COUNT(*) AS total
   FROM transaction_tbl WHERE (film_id = ` +
    req.query.film +
    ' AND schedule_id = ' + req.query.schedule +
    ' AND status != PENDING)';

  console.log(query);

  connection.query(query, function(error, rows, fields) {
    if (error) {
      console.log(error);
    } else {
      response.ok(rows, res);
    }
  });
};

// GET own seat
exports.get_own_seat = function getOwnSeat(req, res) {
  const query = `SELECT chair_no FROM transaction_tbl WHERE 
    (film_id = ` + req.query.film +
    ` AND schedule_id = ' + req.query.schedule + ' AND status != 
    "CANCELLED" AND user_id = ` + req.query.user_id + ')';

  console.log(query);

  connection.query(query, function(error, rows, fields) {
    if (error) {
      console.log(error);
    } else {
      response.ok(rows, res);
    }
  });
};

// Get seats of transaction
exports.get_seats = function getSeats(req, res) {
  const query = `SELECT chair_no FROM transaction_tbl 
  WHERE (film_id = ` + req.query.film +
    ' AND schedule_id = ' + req.query.schedule +
    ' AND status != "CANCELLED")';

  console.log(query);

  connection.query(query, function(error, rows, fields) {
    if (error) {
      console.log(error);
    } else {
      response.ok(rows, res);
    }
  });
};

// Getting rating and review
exports.get_status = function getStatus(req, res) {
  const query = `SELECT film_id, schedule_id, status, rating, review 
  FROM transaction_tbl WHERE user_id = ` + req.query.user_id;

  console.log(query);

  connection.query(query, function(error, rows, fields) {
    if (error) {
      console.log(error);
    } else {
      response.ok(rows, res);
    }
  });
};

// Getting virtual account
exports.get_va = function getVA(req, res) {
  const query = `SELECT virtual_acc FROM transaction_tbl 
  WHERE (status = "PENDING"' + ' AND user_id = ' + req.query.user_id + ')`;

  console.log(query);

  connection.query(query, function(error, rows, fields) {
    if (error) {
      console.log(error);
    } else {
      response.ok(rows, res);
    }
  });
};

// Setting update seat
exports.set_seat = function updateSeat(req, res) {
  const query = `UPDATE transaction_tbl SET chair_no = "' 
  + req.body.chair + '" WHERE (user_id = ' + req.body.user +
    ' AND film_id = ' + req.body.film 
    + ' AND schedule_id = ' + req.body.schedule + ')`;

  console.log(query);

  connection.query(query, function(error, rows, fields) {
    if (error) {
      console.log(error);
    } else {
      response.ok(rows, res);
    }
  });
};

// Setting up status after reading from ws-bank
exports.set_status = function setStatus(req, res) {
  const query = 'UPDATE transaction_tbl SET status = "' +
    req.body.status + '" WHERE virtual_acc = ' + req.body.va;

  console.log(query);

  connection.query(query, function(error, rows, fields) {
    if (error) {
      console.log(error);
    } else {
      response.ok(rows, res);
    }
  });
};

// Adding rating and review
exports.set_rating_and_review = function setComments(req, res) {
  const query = 'UPDATE transaction_tbl SET rating = ' +
    req.body.rating + ', review = "' + req.body.review +
    '" WHERE (film_id = ' + req.body.film + ' AND schedule_id = ' +
    req.body.schedule + ' AND user_id = ' + req.body.user + ')';

  console.log(query);

  connection.query(query, function(error, rows, fields) {
    if (error) {
      console.log(error);
    } else {
      response.ok(rows, res);
    }
  });
};

// Just index
exports.index = function(req, res) {
  response.ok('Hello from the NodeJS RESTful side!', res);
};
