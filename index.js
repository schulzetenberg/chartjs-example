var express = require('express');
var app = express();
var server = require('http').createServer(app);

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

app.use(express.static('public'));

app.use(express.static('node_modules')); // node_modules is private, only use for testing!!!

server.listen(8999);
