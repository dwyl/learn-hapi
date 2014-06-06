var Lab = require("lab"),
    server = require("../");
Lab.experiment("Users", function() {
    // tests
    Lab.test("main endpoint lists usernames on the network", function(done) {
	    var options = {
	        method: "GET",
	        url: "/users"
	    };
	 
	    server.inject(options, function(response) {
	        var result = response.result;
	 
	        Lab.expect(response.statusCode).to.equal(200);
	        Lab.expect(result).to.be.instanceof(Array);
	        Lab.expect(result).to.have.length(5);
	 
	        done();
	    });
	});	
});