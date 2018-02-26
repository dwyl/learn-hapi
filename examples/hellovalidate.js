// Start this app from your command line with: node examples/hellovalidate.js
// then visit: http://localhost:3000/YOURNAME

const Hapi = require('hapi');
const Joi  = require('joi');
const Boom = require('boom');
const port = 3000; // process.env.PORT || 3000; // allow port to be set by environment

const server = new Hapi.Server({ port: port });

server.route({
  method: ['GET', 'POST'],
  path: '/{name*}',
  config: {  // validate will ensure YOURNAME is valid before replying to your request
    validate: { params: Joi.object().keys({ name: Joi.string().max(40).min(2).alphanum() }) },
    handler: function (request, h) {
      return 'Hai '+ request.params.name + '!';
    }
  }
});

server.route({
  method: 'GET',
  path: '/photo/{id*}',
  config: {  // validate will ensure YOURNAME is valid before replying to your request
    validate: { params: { id: Joi.string().max(40).min(2).alphanum() } },
    handler: function (request, h) {
        // until we implement authentication we are simply returning a 401:
        return Boom.unauthorized('Please log-in to see that');
    }
  }
});

module.exports = server;
