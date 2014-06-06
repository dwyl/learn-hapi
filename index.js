var Hapi = require('hapi');
var server = Hapi.createServer('0.0.0.0', process.env.PORT || 3000);
var database = require("./database.json");

server.route({
    path: "/users",
    method: "GET",
    handler: function(request, reply) {
        reply(Object.keys(database));
    }
});

if (!module.parent) { // only start the server if module is parent
    server.start(function() {
        console.log("Server started", server.info.uri);
    });
}
module.exports = server;