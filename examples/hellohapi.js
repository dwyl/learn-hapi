// Start the app from your command line with: node hellohapi.js
// then visit: http://localhost:8000 in your browser

var Hapi = require('hapi');
var server = new Hapi.Server();
server.connection({
	host: '0.0.0.0',
	port: Number(process.argv[2] || 8000)
});


server.route({
	method: 'GET',
	path: '/',
	handler: function(req, reply) {
		return reply('Hello Hapi');
	}
});

server.start(function(){ // boots your server
	console.log('Now Visit: http://localhost:8000');
});
