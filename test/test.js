var Code = require('code');   // assertion library
var Lab = require('lab');
var lab = exports.lab = Lab.script();

var server = require("../examples/hellovalidate.js"); // require ../index.js
lab.experiment("Basic HTTP Tests", function() {
    // tests
    lab.test("Main endpoint /{yourname*} ", function(done) {
	    var options = {
	        method: "GET",
	        url: "/Timmy"
	    };
	 	// server.inject lets you similate an http request
	    server.inject(options, function(response) {
	        Code.expect(response.statusCode).to.equal(200);  //  Expect http response status code to be 200 ("Ok")
	        Code.expect(response.result).to.have.length(10); // Expect result to be "Hello Timmy!" (12 chars long)
	        done();                                         // done() callback is required to end the test.
	    });
	});

    // we expect this test to return 400 (validation error)
	lab.test("creating valid user", function(done) {
	    var options = {
	        method: "GET",
	        url: "/T"
	    };

	    server.inject(options, function(response) {
	        Code.expect(response.statusCode).to.equal(400);
	        // Code.expect(response.result.message).to.equal('yourname length must be at least 2 characters long');
	        done();
	    });
	});
});

lab.experiment("Authentication Required to View Photo", function() {
    // tests
    lab.test("Deny view of photo if unauthenticated /photo/{id*} ", function(done) {
	    var options = {
	        method: "GET",
	        url: "/photo/8795"
	    };
	 	// server.inject lets you similate an http request
	    server.inject(options, function(response) {
	        Code.expect(response.statusCode).to.equal(401);  //  Expect http response status code to be 200 ("Ok")
	        Code.expect(response.result.message).to.equal("Please log-in to see that"); // (Don't hard-code error messages)
	        done();
	    });
	});
});
