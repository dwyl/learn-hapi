var Code = require('code');   // assertion library
var Lab = require('lab');
var lab = exports.lab = Lab.script();var server = require("../"); // require ../index.js

var server = require("../examples/hellovalidate"); // require ../index.js

lab.experiment("Joi Validation Test", function() {
  // tests
  lab.test("GET /jo should fail due to insufficient name length", function(done) {
    var options = {
      method: "GET",
      url: "/jo"
    };
    server.inject(options, function(response) {
      Code.expect(response.statusCode).to.equal(400);  //  Expect http response status code to be 200 ("Ok")
      // Code.expect(response.result).to.have.length(10); // Expect result to be "Hello Timmy!" (12 chars long)
      // console.log(response.result);
      server.stop();
      done();                                         // done() callback is required to end the test.
    });
	});

  lab.test("GET /joanne should pass", function(done) {
    var options = {
      method: "GET",
      url: "/joanne"
    };
    server.inject(options, function(response) {
      Code.expect(response.statusCode).to.equal(200);  //  Expect http response status code to be 200 ("Ok")
      // Code.expect(response.result).to.have.length(10); // Expect result to be "Hello Timmy!" (12 chars long)
      // console.log(response.result);
      server.stop();
      done();                                         // done() callback is required to end the test.
    });
  });
});
