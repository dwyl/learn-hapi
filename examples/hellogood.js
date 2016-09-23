/**
   Start this app from your command line with:
   node examples/hellogood.js
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
    path: '/{name*}',
    handler: function(request, reply){

        request.log(["name"], request.params.name);

        reply('Hai ' + request.params.name);

        // log after seding a reply
        server.log(["name"], request.params.name + " requested the hello page!");
    }
})

const options = {
    ops: {
        interval: 5000
    },
    reporters: {
        myConsoleReporter: [{
            // good-squeeze allows filtering events based on the `good` event options
            // @see https://github.com/hapijs/good/blob/master/API.md#event-types
            module: 'good-squeeze',
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
}, (err) => {

    if (err) {
        return console.error(err);
    }

    server.start(function(){

        console.log('Now Visit: http://localhost:' + server.info.port + '/YOURNAME');
        console.dir(server.info);
    });
});
