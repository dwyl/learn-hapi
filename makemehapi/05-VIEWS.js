var Hapi = require('hapi');
var Path = require('path');
var server = new Hapi.Server();

server.connection({
    host: 'localhost',
    port: Number(process.argv[2] || 8080)
});

server.route({path: '/{name*}', method:'GET',
  handler: {
    view: "index.html"
  }
});

server.views({
    engines: {
        html: require('handlebars')
    },
    path: Path.join(__dirname, 'templates')
});

server.start();
