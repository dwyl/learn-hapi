// Start this app from your command line with: node hellovalidate.js
// then visit: http://localhost:3000/YOURNAME

var Hapi = require('hapi'),
    Joi  = require('joi');

var server = new Hapi.Server('0.0.0.0', 3000);

server.route({ 
  method: 'GET',
  path: '/{yourname*}',
  config: {  // validate will ensure YOURNAME is valid before replying to your request
    validate: { params: { yourname: Joi.string().max(40).min(2).alphanum() } },
    handler: function (req,reply) {
      reply('Hello '+ req.params.yourname + '!');
    }
  }
});

var Boom = require('boom'); // Todo: add boom to the top of the file
server.route({ 
  method: 'GET',
  path: '/photo/{id*}',
  config: {  // validate will ensure YOURNAME is valid before replying to your request
    validate: { params: { id: Joi.string().max(40).min(2).alphanum() } },
    handler: function (req,reply) {
        // until we implement authentication we are simply returning a 401:
        reply(Boom.unauthorized('Please log-in to see that'));
        // lookup the photo in database
        // check if the user should be able to see it
        // reply with actual url of the image
    }
  }
});

server.start(function() {
  console.log('Now Visit: http://localhost:3000/YOURNAME')
});

module.exports = server;