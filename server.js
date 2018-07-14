var app = require('express')();
var db = require('./db');

var port = 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);

    var connection = db();
    connection.connect((err) => {
        if (err) {
            throw err;
        }
        console.log('connected to db');
    })

});