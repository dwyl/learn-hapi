/**
   Start this app from your command line with:
   node helloparam.js
   then visit: http://localhost:3000/YOURNAME
*/
var Hapi = require('hapi'),
    Joi  = require('joi');

var schema = {
    lastname: Joi.string().max(10).min(2).alphanum()
};

var server = new Hapi.Server('0.0.0.0', process.env.PORT || 3000);

server.route({ 
	method: 'GET',
	path: '/name/{lastname*1}',
	handler: function (req,reply) {
		console.log(req.params)
		// Joi.validate({ lastname: req.params.lastname }, schema, function (err, value) { 
		// 	if(err){
		// 		console.log('E',err);
		// 		reply(err.details[0].message);
		// 	}
			reply('Hello Mrs '+ req.params.lastname);
		// });
	},
	config: { 
		validate: { path: { lastname: Joi.string().max(4).min(2).alphanum() }}
	}
})

server.start();
console.log('Now Visit: http://localhost:3000/name/Robinson')