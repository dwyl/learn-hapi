// Start the app from your command line with: node hellohapi.js
// then visit: http://localhost:8080 in your browser

var Hapi = require('hapi');
var server = new Hapi.Server('0.0.0.0', Number(process.argv[2] || 8080));

server.route({ 
	method: 'GET',
	path: '/',
	handler: function(req, reply) {
		reply('Hello Hapi')
	}
});

server.start(function(){ // boots your server
	console.log('Now Visit: http://localhost:8080')
});