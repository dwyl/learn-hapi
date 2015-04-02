var Path = require('path');
var Hapi = require('hapi');
var server  = new Hapi.Server();
var port    = process.env.PORT || 5000;

server.connection({ port: port });

server.views({
    engines: {
        html: require('handlebars')
    },
    path: Path.join(__dirname, 'views')
});

server.route([  
  { path: '/',
    method: 'GET',
    config: {
      auth: false,
      handler: function(request, reply) {
        reply.view("index");
      }
    }
  },
  {
    method: 'GET',
    path: '/public/{param*}',
    handler: {
        directory: {
            path: Path.normalize(__dirname + '/public')
        }
    }
  }
]);

server.start(function(){
  console.log('Static Server Listening on : http://127.0.0.1:' +port);
});

module.exports = server;