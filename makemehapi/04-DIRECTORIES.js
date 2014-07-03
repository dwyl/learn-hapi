var Hapi = require('hapi');
var server = Hapi.createServer('localhost', Number(process.argv[2] || 8080));

server.route({
  path: "/foo/bar/baz/{param}",
  method: 'GET',
  handler: {
      view: "index.html"
  }
});

server.start();
