/**
   Start this app from your command line with:
   node hellolog.js
   then visit: http://localhost:3000/YOURNAME
*/
var Hapi = require('hapi');

var server = new Hapi.Server('0.0.0.0', process.env.PORT || 3000);

server.route({
	method: 'GET',
	path: '/{name*}',
	handler: function(req, reply){
		reply('Hai ' + req.params.name)
		server.log(["test"], req.params.name + " requested the hello page!");
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