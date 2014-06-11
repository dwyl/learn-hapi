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

if (!module.parent) { // only start the server if module is parent (don't boot for tests)
    server.start(function() {
        console.log("Server started", server.info.uri);
    });
}

module.exports = server;