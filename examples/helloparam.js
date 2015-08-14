/**
   Start this app from your command line with:
   node helloparam.js
   then visit: http://localhost:3000/YOURNAME
*/
var Hapi = require('hapi');

var server = new Hapi.Server();
server.connection({
    host: '0.0.0.0',
    port: 3000
});


server.route({
	method: 'GET',
	path: '/{p*}',
	handler: function(req, reply){
		reply('Hello ' + req.params.p)
		server.log(["test"], "This is my log entry!");
	}
})

server.start(function(){
  console.log('Now Visit: http://localhost:3000/YOURNAME')
});

server.on("log", function(event, tags) {
    var tagsJoined = Object.keys(tags).join();
    var message = event.data;
    console.log("Log entry [" + tagsJoined + "] (" + (message || "") + ")");
});
