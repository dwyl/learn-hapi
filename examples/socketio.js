// The socket.io client JavaScript is located at http://localhost:8000/socket.io/socket.io.js
// To create a new socket.io handshake make a POST request to http://localhost:8000/socket.io/1
// use the resulting session ID for subsequent requests (see https://github.com/LearnBoost/socket.io-spec)
// For example, in the chrome debug console you can create a new WebSocket with the following URI
// 'ws://localhost:8080/socket.io/1/websocket/Ww4ULq6wOTUZYD62v3yu'
// where Ww4ULq6wOTUZYD62v3yu is the session ID

// Load modules

var Hapi = require('hapi');
var SocketIO = require('socket.io');

// Declare internals

var internals = {};

internals.startServer = function () {

    var server = new Hapi.Server('0.0.0.0', process.env.PORT || 8000);

    var helloHandler = function (request, reply) {

        reply('Hello');
    };

    server.route({ method: 'GET', path: '/', handler: helloHandler });

    server.start(function () {
    	// console.dir(server.listener);
        var io = SocketIO.listen(server.listener);
        io.on('connection', function (socket) {

            socket.emit('Hello!');

            socket.on('message', function () {
                socket.emit('received');
            });
        });

    });
};


internals.startServer();
