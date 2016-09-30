/**
   Start this app from your command line with:
   node examples/hellogood.js
   then visit: http://localhost:3000/hello/YOURNAME
*/
var Hapi = require('hapi');

var server = new Hapi.Server();

server.connection({
    host: '0.0.0.0',
    port: 3000
});

server.route({
    method: 'GET',
    path: '/hello/{name*}',
    handler: function(request, reply) {
        // log the request
        request.log(['name'], request.params.name + ' (request.log)');
        // use request.log instead of console.log:
        request.log('info', {my: 'object', has: 'many', props: { hello: request.params.name } });
        // server.log(['name'], request.params.name + ' requested / ' + '(server.log)');
        return reply('Hello ' + request.params.name);

    }
})

const options = {
    ops: {
        interval: 30000 // reporting interval (30 seconds)
    },
    reporters: {
        myConsoleReporter: [{
            // good-squeeze allows filtering events based on the `good` event options
            // @see https://github.com/hapijs/good/blob/master/API.md#event-types
            module: 'good-squeeze', // https://github.com/hapijs/good-squeeze
            name: 'Squeeze',
            // @example "Log everything"
            args: [{ log: '*', error: '*', response: '*', request: '*', ops: '*' }]
            // @example "Log only request logs with a certain tag":
            // args: [{ request: ['name'] }]
        }, {
            module: 'good-console'
        }, 'stdout']
      }
};

server.register({
    register: require('good'),
    options,
}, function (err) {

    if (err) {
        return console.error(err);
    }

    server.start(function () {
        console.log('Now Visit: http://localhost:' + server.info.port + '/YOURNAME');
        console.dir(server.info);
    });
});
