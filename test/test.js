var Lab = require("lab"),    // the Lab 
    server = require("../"); // require index.js
Lab.experiment("Basic Url", function() {
    // tests
    Lab.test("main endpoint lists usernames on the network", function(done) {
	    var options = {
	        method: "GET",
	        url: "/users"
	    };
	 
	    server.inject(options, function(response) {
	        var result = response.result;
	 
	        Lab.expect(response.statusCode).to.equal(200);
	        Lab.expect(result).to.have.length(12);
	 
	        done();
	    });
	});	

    // we expect this test to return 400 (validation error)
	Lab.test("creating valid user", function(done) {
	    var options = {
	        method: "GET",
	        url: "/T"
	    };
	 
	    server.inject(options, function(response) {
	        var result = response.result,
	        payload = options.payload;
	 
	        Lab.expect(response.statusCode).to.equal(400);   
	        Lab.expect(result.message).to.equal('yourname length must be at least 2 characters long');
	 
	        done();
	    });
	});

});