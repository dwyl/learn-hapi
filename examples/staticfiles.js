const Path = require('path');
const Hapi = require('hapi');
const port    = process.env.PORT || 5000;
const server  = new Hapi.Server({ port: port });

const plugins = [
  require('inert'),  // serve static content
  require('vision')  // views
]

async function startServer() {

  await server.register(plugins);

  server.views({
    engines: {
      html: require('handlebars')
    },
    path: Path.join(__dirname, 'views')
  });

  server.route([
    {
      path: '/',
      method: 'GET',
      config: {
        auth: false,
        handler: function(request, h) {
          return h.view("index");
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

  await server.start();
  console.log('Static Server Listening on : http://127.0.0.1:' +port);
}

startServer();

module.exports = server;
