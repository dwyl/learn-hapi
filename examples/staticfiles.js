var path = require('path');
var pub = path.normalize(__dirname + '/public');
var Hapi = require('hapi');
var server  = new Hapi.Server();
var port    = process.env.PORT || 5000;

server.connection({ port: port });

server.route({
    method: 'GET',
    path: '/public/{param*}',
    handler: {
        directory: {
            path: pub
        }
    }
});

server.start(function(){
  console.log('Static Server Listening on : http://127.0.0.1:' +port);
});

module.exports = server;