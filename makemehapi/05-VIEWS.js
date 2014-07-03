var options = {
  views: {
    path: 'templates',
    engines: {
      html: require('handlebars')
    }
  }
};

var Hapi = require('hapi');
var server = Hapi.createServer('localhost',
  Number(process.argv[2] || 8080),
  options
);

server.route({
  path:'/',
  method: 'GET',
  handler: {
    view: "index.html"
  }
});

server.start();
