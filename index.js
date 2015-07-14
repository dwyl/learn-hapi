// Start this app from your command line with: node hellovalidate.js
// then visit: http://localhost:3000/YOURNAME

var Hapi = require('hapi');
var Joi  = require('joi');
var Boom = require('boom');
var port = 3000; // process.env.PORT || 3000; // allow port to be set by environment

var server = new Hapi.Server();
server.connection({ port: port });

server.route({
  method: '*',
  path: '/{name*}',
  config: {  // validate will ensure YOURNAME is valid before replying to your request
    validate: { params: { name: Joi.string().max(40).min(2).alphanum() } },
    handler: function (req,reply) {
      reply('Hello '+ req.params.name + '!');
    }
  }
});

server.route({
  method: 'GET',
  path: '/photo/{id*}',
  config: {  // validate will ensure YOURNAME is valid before replying to your request
    validate: { params: { id: Joi.string().max(40).min(2).alphanum() } },
    handler: function (req,reply) {
        // until we implement authentication we are simply returning a 401:
        reply(Boom.unauthorized('Please log-in to see that'));
    }
  }
});

server.start(function() {
  console.log('Now Visit: http://localhost:' + port + '/YOURNAME');
});

module.exports = server;
