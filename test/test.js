const Code = require('code');   // assertion library
const Lab = require('lab');
const lab = exports.lab = Lab.script();

const server = require("../examples/hellovalidate.js");

lab.experiment("Basic HTTP Tests", function() {
    // tests
    lab.test("Main endpoint /{yourname*} ", async function() {
	    const options = {
	        method: "GET",
	        url: "/Timmy"
	    };
	 	// server.inject lets you similate an http request
	    const response = await server.inject(options)
      Code.expect(response.statusCode).to.equal(200);  //  Expect http response status code to be 200 ("Ok")
      Code.expect(response.result).to.have.length(10); // Expect result to be "Hai Timmy!" (10 chars long)
	});

    // we expect this test to return 400 (validation error)
	lab.test("creating valid user", async function() {
	    const options = {
	        method: "GET",
	        url: "/T"
	    };

	    const response = await server.inject(options)
      Code.expect(response.statusCode).to.equal(400);
      Code.expect(response.result.message).to.equal('Invalid request params input');
	});
});

lab.experiment("Authentication Required to View Photo", function() {
    // tests
    lab.test("Deny view of photo if unauthenticated /photo/{id*} ", async function() {
	    const options = {
	        method: "GET",
	        url: "/photo/8795"
	    };
	 	// server.inject lets you similate an http request
	    const response = await server.inject(options)
      Code.expect(response.statusCode).to.equal(401);  //  Expect http response status code to be 401 ("Unauthorized")
      Code.expect(response.result.message).to.equal("Please log-in to see that"); // (Don't hard-code error messages)
	});
});
