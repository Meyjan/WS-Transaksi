'use strict';

module.exports = function(app) {
    const todoList = require('./controller');

    app.route('/').get(todoList.index);
    app.route('/users').get(todoList.users);
    app.route('/add').post(todoList.add_user);
}