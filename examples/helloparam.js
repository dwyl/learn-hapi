/**
   Start this app from your command line with:
   node examples/helloparam.js
   then visit: http://localhost:3000/YOURNAME
*/
const Hapi   = require('hapi');
const server = new Hapi.Server({
    host: '0.0.0.0',
    port: 3000
});

server.route({
	method: 'GET',
	path: '/{p*}',
	handler: function(req, h){
		return 'Hello ' + req.params.p;
	}
})

async function startServer() {
  await server.start();
  console.log('Now Visit: http://localhost:' + server.info.port + '/YOURNAME');
}
