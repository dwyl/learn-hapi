const Code = require('code');   // assertion library
const Lab = require('lab');
const lab = exports.lab = Lab.script();

const server = require("../examples/hellovalidate"); // require ../index.js

lab.experiment("Joi Validation Test", function() {
  // tests
  lab.test("GET /j should fail due to insufficient name length", async function() {
    const options = {
      method: "GET",
      url: "/j"
    };
    const response = await server.inject(options);
    Code.expect(response.statusCode).to.equal(400);  //  Expect http response status code to be 400 ("Bad Request")
    await server.stop();
	});

  lab.test("GET /jo should pass", async function() {
    const options = {
      method: "GET",
      url: "/jo"
    };
    const response = await server.inject(options);
    Code.expect(response.statusCode).to.equal(200);  //  Expect http response status code to be 200 ("Ok")
    Code.expect(response.result).to.have.length(7); // Expect result to be "Hai jo!" (7 chars long)
    await server.stop();
  });
});
