var express = require('express');
var path = require('path');

var app = express();
var port = 8080;

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.use(express.static('dist'));

app.listen(port, function (error) {
    if (error) {
        console.log(error);
    } else {
        console.log('Application running on port: ' + port);
    }
});
