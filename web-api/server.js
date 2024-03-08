"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cors = require("cors");
var express = require("express");
var bodyParser = require("body-parser");
var mongoose_1 = require("mongoose");
var dotenv = require("dotenv");
dotenv.config({ path: ".env.".concat(process.env.NODE_ENV || 'development') });
var dbURI;
var port;
if (process.env.NODE_ENV === 'development') {
    dbURI = process.env.DATABASE_LOCAL_DB;
    port = process.env.PORT || 3000;
}
if (process.env.NODE_ENV === 'test') {
    dbURI = process.env.DATABASE_TEST_DB;
    port = process.env.PORT || 3001;
}
if (process.env.NODE_ENV === 'production') {
    dbURI = process.env.DATABASE_PROD_DB;
    port = process.env.PORT || 80;
}
else {
    dbURI = process.env.DATABASE_LOCAL_DB;
    port = process.env.PORT || 3000;
}
var app = express();
// Middleware
app.use(cors());
app.use(bodyParser.json());
console.log(process.env.DB_CONNECTION_STRING);
// MongoDB connection
mongoose_1.default.connect(process.env.DB_CONNECTION_STRING, {}).then(function () {
    console.log('Connected to MongoDB using ' + process.env.DB_CONNECTION_STRING);
}).catch(function (error) {
    console.error('Error connecting to MongoDB:', error);
});
// Routes
// app.get('/api/HelloWorld', (req: Request, res: Response) => {
//    res.send('Hello, World!');
// });
app.listen(port, function () {
    console.log('Server is running on port ' + port);
});
