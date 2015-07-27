// Start this app from your command line with: node hellovalidate.js
// then open in web browser: http://localhost:3000/YOURNAME-HERE

var Hapi = require('hapi');
var Joi  = require('joi');
var server = new Hapi.Server();

server.connection({
	host: '0.0.0.0',
	port: 3000
});

server.route({
	method: '*',
	path: '/{firstname*}',
	config: {  // validate will ensure YOURNAME is valid before replying to your request
		validate: { params: { firstname: Joi.string().max(40).min(2).alphanum() } },
		handler: function (req, reply) {
			reply('Hello '+ req.params.firstname + '!');
		}
	}
});

server.start(function() {
	console.log('Now Visit: http://localhost:3000/Alex');
});
