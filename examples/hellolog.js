/**
   Start this app from your command line with:
   node hellolog.js
   then visit: http://localhost:3000/YOURNAME
*/
var Hapi = require('hapi');

var server = new Hapi.Server('0.0.0.0', process.env.PORT || 3000, {
	debug: {
    	request: ["received"] // logs all requests to stdout
	}
});

server.route({
	method: 'GET',
	path: '/{name*}',
	handler: function(request, reply){
		// console.log(request);
		reply('Hai ' + request.params.name);
		// log after seding a reply
		server.log(["test"], request.params.name + " requested the hello page!");
		// request.log(["path"]);
	}
})

server.start(function(){
	console.log('Now Visit: http://localhost:3000/YOURNAME')
});

// Listen for events of type 'log'
server.on("log", function(event, tags) {
    var tagsJoined = Object.keys(tags).join();
    var msg = event.data;
    console.log(tagsJoined+" | "+msg);
});