// Start the app from your command line with: node examples/hellohapi.js
// then visit: http://localhost:8000 in your browser

const Hapi = require('hapi');
const server = new Hapi.Server({
	host: '0.0.0.0',
	port: Number(process.argv[2] || 8000)
});

server.route({
	method: 'GET',
	path: '/',
	handler: function(req, h) {
		return 'Hello Hapi';
	}
});

async function startServer() {
	await server.start(); // boots your server
	console.log('Now Visit: http://localhost:'+server.info.port);
}
