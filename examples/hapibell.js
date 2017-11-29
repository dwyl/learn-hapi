/**
  Bell is currently not compatible with Hapi v17,
  so this example is using Hapi v16
**/

var Hapi = require('hapi');
var server = new Hapi.Server();
server.connection({
    port: 3000
});

// Register bell with the server
server.register(require('bell'), function (err) {

    // Declare an authentication strategy using the bell scheme
    // with the name of the provider, cookie encryption password,
    // and the OAuth client credentials.
    server.auth.strategy('twitter', 'bell', {
        provider: 'twitter',
        password: 'cookie_encryption_password',
        clientId: 'my_twitter_client_id',
        clientSecret: 'my_twitter_client_secret',
        isSecure: false   // Terrible idea but required if not using HTTPS
    });

    // Use the 'twitter' authentication strategy to protect the
    // endpoint handling the incoming authentication credentials.
    // This endpoints usually looks up the third party account in
    // the database and sets some application state (cookie) with
    // the local application account information.
    server.route({
        method: ['GET', 'POST'], // Must handle both GET and POST
        path: '/login',          // The callback endpoint registered with the provider
        config: {
            auth: 'twitter',
            handler: function (request, reply) {

                // Perform any account lookup or registration, setup local session,
                // and redirect to the application. The third-party credentials are
                // stored in request.auth.credentials. Any query parameters from
                // the initial request are passed back via request.auth.credentials.query.
                return reply.redirect('/home');
            }
        }
    });

    server.start();
});
