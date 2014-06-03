/**
   Start this app from your command line with:
   node helloparam.js
   then visit: http://localhost:3000/YOURNAME
*/
var Hapi = require('hapi');

var server = new Hapi.Server('0.0.0.0', process.env.PORT || 3000);

server.route({
	method: 'GET',
	path: '/{p*}',
	handler: function(req, reply){
		reply('Hai ' + req.params.p)
	}
})

server.start();
console.log('Now Visit: http://localhost:3000/YOURNAME')