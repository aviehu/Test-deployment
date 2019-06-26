import express from 'express';
var app = express();

// Our first route
app.get('/', function (req, res) {
    res.send('It is working!!!');
});

// Listen to port 5000
app.listen(5000, function () {
    console.log('Dev app listening on port 5000!');
});