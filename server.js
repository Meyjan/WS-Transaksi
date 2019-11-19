// File Name: index.js

// Import express
let express = require ('express'),
    app = express(),
    port = process.env.PORT || 3005,
    bodyParser = require('body-parser');
    controller = require('./controller');

const cors = require('cors');

// Configure express app
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());

// Getting routes for the server
let routes = require('./routes');
routes(app)

// Launch app to listen to specified port
app.listen(port, function () {
    console.log("Running RestHub on port " + port);
});