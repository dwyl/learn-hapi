var Hapi = require('hapi');
var server = Hapi.createServer('0.0.0.0', process.env.PORT || 3000);
var quotes = {

};

server.route([
  {
    method: 'GET',
    path: '/',
    handler: function (req, reply) {
      reply('i am a unique snowflake!');
    }
  },
  {
  	method: 'GET',
  	path: '/quotes',
  	handler: function (req, reply) {
  		reply()
  	}
  }
]);

server.start();  // boots the server