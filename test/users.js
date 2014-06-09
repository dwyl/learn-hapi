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
	        // console.log(result);
	 
	        Lab.expect(response.statusCode).to.equal(200);
	        Lab.expect(result).to.be.instanceof(Array);
	        Lab.expect(result).to.have.length(5);
	 
	        done();
	    });
	});	

	Lab.test("creating valid user", function(done) {
	    var options = {
	        method: "PUT",
	        url: "/users/testuser",
	        payload: {
	            full_name: "Test User",
	            age: 19,
	            image: "dhown783hhdwinx.png"
	        }
	    };
	 
	    server.inject(options, function(response) {
	        var result = response.result,
	        payload = options.payload;
	 
	        Lab.expect(response.statusCode).to.equal(200);   
	        Lab.expect(result.full_name).to.equal(payload.full_name);
	        Lab.expect(result.age).to.equal(payload.age);
	        Lab.expect(result.image).to.equal(payload.image);
	        Lab.expect(result.count).to.equal(0);
	 
	        done();
	    });
	});

});