var Lab = require("lab"),    // the Lab
	Code = require('code');


// Test shortcuts

var lab = exports.lab = Lab.script();
var describe = lab.describe;
var it = lab.it;
var expect = Code.expect;

    server = require("../"); // require index.js
describe("Basic HTTP Tests", function() {
    // tests
    it("Main endpoint /{yourname*} ", function(done) {
	    var options = {
	        method: "GET",
	        url: "/Timmy"
	    };
	 	// server.inject lets you similate an http request
	    server.inject(options, function(response) {
	        expect(response.statusCode).to.equal(200);  //  Expect http response status code to be 200 ("Ok")
	        expect(response.result).to.have.length(12); // Expect result to be "Hello Timmy!" (12 chars long)
	        done();                                         // done() callback is required to end the test.
	    });
	});	

    // we expect this test to return 400 (validation error)
	it("creating valid user", function(done) {
	    var options = {
	        method: "GET",
	        url: "/T"
	    };
	 
	    server.inject(options, function(response) {	 
	        expect(response.statusCode).to.equal(400);
	        expect(response.result.message).to.equal('yourname length must be at least 2 characters long');
	        done();
	    });
	});
});

describe("Authentication Required to View Photo", function() {
    // tests
    it("Deny view of photo if unauthenticated /photo/{id*} ", function(done) {
	    var options = {
	        method: "GET",
	        url: "/photo/8795"
	    };
	 	// server.inject lets you similate an http request
	    server.inject(options, function(response) {
	        expect(response.statusCode).to.equal(401);  //  Expect http response status code to be 200 ("Ok")
	        expect(response.result.message).to.equal("Please log-in to see that"); // (Don't hard-code error messages)
	        done();
	    });
	});	
});