var Code = require('code');   // assertion library
var Lab = require('lab');
var lab = exports.lab = Lab.script();

var server = require("../examples/hellovalidate"); // require ../index.js

lab.experiment("Joi Validation Test", function() {
  // tests
  lab.test("GET /j should fail due to insufficient name length", function(done) {
    var options = {
      method: "GET",
      url: "/j"
    };
    server.inject(options, function(response) {
      Code.expect(response.statusCode).to.equal(400);  //  Expect http response status code to be 400 ("Bad Request")
      server.stop();
      done();                                         // done() callback is required to end the test.
    });
	});

  lab.test("GET /jo should pass", function(done) {
    var options = {
      method: "GET",
      url: "/jo"
    };
    server.inject(options, function(response) {
      Code.expect(response.statusCode).to.equal(200);  //  Expect http response status code to be 200 ("Ok")
      Code.expect(response.result).to.have.length(7); // Expect result to be "Hai jo!" (7 chars long)
      server.stop();
      done();                                         // done() callback is required to end the test.
    });
  });
});
