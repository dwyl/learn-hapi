var Hapi = require('hapi');
var server = Hapi.createServer('0.0.0.0', process.env.PORT || 3000);
var quotes = {
"lego":"Everything is awesome"
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
  		reply(quotes); // content-type: application/json; charset=utf-8
  	}
  }
]);

server.start();  // boots the server