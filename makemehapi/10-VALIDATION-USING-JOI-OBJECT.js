var Hapi = require('hapi');
var Joi = require('joi');
var server = new Hapi.Server();

server.connection({
    host: 'localhost',
    port: Number(process.argv[2] || 8080)
});

function myHandler(request, reply) {
  reply('login successful');
}

var routeConfig = {
    path: '/login',
    method: 'POST',
    config: {
        handler: myHandler,
        validate: {
           payload: Joi.object({
                username: Joi.string(),
                password: Joi.string().alphanum(),
                accessToken: Joi.string().alphanum(),
                birthyear: Joi.number().integer().min(1900).max(2013),
                email: Joi.string().email()
           })
           .options({allowUnknown: true})
          //  .with('username', 'birthyear')
           .without('password', 'accessToken')
        }
    }
}

server.route(routeConfig);

server.start();
