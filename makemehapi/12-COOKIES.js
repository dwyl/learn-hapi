var Hapi = require('hapi');
var server = new Hapi.Server();

server.connection({
    host: 'localhost',
    port: Number(process.argv[2] || 8080)
});

server.state('session', {
  path: '/{path*}',
  encoding: 'base64json',
  ttl: 10,
  domain: 'localhost'
});

server.route(
  {
    method: 'GET',
    path: '/set-cookie',
    handler: function (request, reply) {
      return reply({
        message : 'success'
      }).state('session', {
        key : 'makemehapi'
      });
    },
    config: {
      state: {
        parse: true,
        failAction: 'log'
      }
    }
  }
);

server.route(
  {
    method: 'GET',
    path: '/check-cookie',
    handler: function (request, reply) {
      var session = request.state.session;
      var result;
      if (session) {
        result = {
          user : 'hapi'
        };
      } else {
        result = new Hapi.error.unauthorized('Missing authentication');
      }
      reply(result);
    }
  }
);

server.start();
