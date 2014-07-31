var http_server = require('http-server'),
	path		= require ('path');

var server = http_server.createServer()
	server.listen(process.env.PORT || 8000)