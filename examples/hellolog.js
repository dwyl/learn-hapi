/**
   Start this app from your command line with:
   node examples/hellolog.js
   then visit: http://localhost:3000/YOURNAME
*/
const Hapi = require('hapi');

const server = new Hapi.Server({
	debug: {
    	request: ["received"] // logs all requests to stdout
	},
	host: '0.0.0.0',
	port: 8000
});


server.route({
	method: 'GET',
	path: '/{name*}',
	handler: function(request, h){
		// log before seding a reply
		server.log(["test"], request.params.name + " requested the hello page!");

		return 'Hai ' + request.params.name;
	}
})

async function startServer() {
	await server.start();
	console.log('Now Visit: http://localhost:' + server.info.port + '/YOURNAME');
	console.dir(server.info);
}

startServer();

// Listen for events of type 'log'
server.events.on("log", function(event, tags) {
    const tagsJoined = Object.keys(tags).join();
    const msg = event.data;
    console.log(tagsJoined+" | "+msg);
});
