![Happiness Is...](http://i.imgur.com/Df5Z18T.jpg)


[![Build Status](https://travis-ci.org/nelsonic/learn-hapi.png?branch=master)](https://travis-ci.org/nelsonic/learn-hapi)
[![Coverage Status](https://coveralls.io/repos/nelsonic/learn-hapi/badge.png)](https://coveralls.io/r/nelsonic/learn-hapi)
<!-- [![Code Climate](https://codeclimate.com/github/nelsonic/learn-hapi.png)](https://codeclimate.com/github/nelsonic/learn-hapi) -->
[![Dependencies](https://david-dm.org/nelsonic/learn-hapi.png?theme=shields.io)](https://david-dm.org/nelsonic/learn-hapi)
[![devDependency Status](https://david-dm.org/nelsonic/learn-hapi/dev-status.svg)](https://david-dm.org/nelsonic/learn-hapi#info=devDependencies)
<!--
[![NPM version](https://badge.fury.io/js/learn-hapi.png)](https://npmjs.org/package/learn-hapi)
-->

Learn Hapi
==========

Happiness is learning how to use the Hapi (Node.js) web framework to
build reliable/scalable apps faster.

## What is Hapi?

Hapi is *the* framework for rapidly building RESTful web services
in Node.js. <br />
Whether you are building a very simple set of RESTful services
for your website/mobile app or a large scale, cache heavy,
and secure set of services, hapi has you covered.
Hapi will help get your server developed quickly with its wide range
of configurable options.

> *Watch* this video: http://youtu.be/BsyvnVOhp4U (good/recent intro to Hapi)

### What is a RESTful web service?

![restful API](http://i.imgur.com/xKXnKGT.jpg)

[ReST](http://en.wikipedia.org/wiki/Representational_state_transfer)
is a structured way of building web services and applications.
When something is described as "RESTful" it simply means it follows a
predefined predictable pattern for how it responds to requests.

#### Video Explanation of REST

- Intro to REST: http://youtu.be/llpr5924N7E
- Google Developers Intro to REST: https://www.youtube.com/watch?v=YCcAE2SCQ6k

#### Read more about REST APIs / RESTful Web Services

- REST Wikipedia: http://en.wikipedia.org/wiki/REST (*Skim* and make sure you understand the concepts)
- Beginners Guide: http://www.restapitutorial.com/
- Basic Q&A for REST: http://katgleason.tumblr.com/post/37836552900/how-i-explained-rest-to-my-wife
- What are RESTful web services: http://stackoverflow.com/a/3636470/1148249
- What is "CRUD"? http://en.wikipedia.org/wiki/Create,_read,_update_and_delete


## Why Hapi instead of XYZ framework?

**Q**: I already know how to build REST APIs in [Express](http://expressjs.com/)
and [Restify](http://mcavage.me/node-restify/) why learn a *new* framework?  <br />
**A**: If you are *happy* with your existing system & level of team productivity,
stick with what you know. If not, learn [how to be] Hapi.
(I have built Sites/APIs with both Express and Restify and find Hapi has solved more
"real world" problems and thus I end up writing less code. YMMV. See benefits below)

**Q**: Hapi looks like quite a steep learning curve,
how long will it take me to learn? <br />
**A**: You can get started *immediately* with the simple examples below,
it will take aprox **60 mins** to complete them all.
(after that add a couple of hours to read/learn further) the most important
part is to ***try Hapi*** on a simple project to gain experience/confidence.

### Key Benefits

- ***Performance*** - WalmartLabs are the guys who found/solved the
[Node.js *CORE* Memory Leak](http://www.joyent.com/blog/walmart-node-js-memory-leak)
they have developed Hapi follwing
[Benchmark Driven Development](https://github.com/felixge/faster-than-c)
and the result is a high-performance framework.
- ***Security*** - they have focussed on security and battle-tested the
framework during [Black Friday](http://nodeup.com/fiftysix)
(holiday shopping busy day) without incident.
- **Mobile Optimised** (lightweight - built for mobile e-commerce)
- Plugin Architecture - easy to extend/add your own modules (good ecosystem)
- ***DevOps Friendly*** (great stats logging)
see: https://github.com/spumko/good
- Built-in ***Caching*** (Redis, MongoDB or Memcached)
- ***100% Code Coverage*** (for the core)
- Key Functionality is **Built-in** and good plugins add other
functionality seamlessly.


## Dive In!

## Requirements

- [x] A computer that can run [Node.js](http://nodejs.org/download/)  
Mac/Windows/Linux/Chromebook
- [x] Access to the Internet (only required for installation)
- [x] 60 minutes of time +/-

## Beginner: Make Me Hapi

First thing you should do to get acquainted with Hapi is work through the
[makemehapi](http://nodeschool.io/#makemehapi). <br />
(assumes some [node.js](http://nodeschool.io/#learn-you-node) prior
knowledge but otherwise a gentle intro)

Create a new folder on your local machine for your answers to **makemehapi**:

```
mkdir makemehapi && cd makemehapi
```

Install the workshop:

```
npm install -g makemehapi@latest
```
(if it fails to install try `sudo npm install -g makemehapi` <br />
	if you prefer not to use sudo, you can run it locally by cloning the
	[makemehapi repo](https://github.com/spumko/makemehapi) and then running
	`node makemehapi`)

Once its installed, start the tutorial with the following command:
```
makemehapi
```

Try to complete all challenges.

![makemehapi complete](http://i.imgur.com/11Vx4rF.png)

If you get *stuck*, you can either google for the specific error you are
seeing or if you are not "getting" it, you can always look at my solutions
in the **/makemehapi** directory or if you still don't get it, **ask me**:
[@nelsonic](https://twitter.com/nelsonic)

<hr />

## Intermediate

### Recap: Hello World in Hapi

Following on from the **makemehapi** workshop, lets create a new directory
called **hapiapp**

```sh
mkdir hapiapp && cd hapiapp
```

Type out (or copy-paste) this code into a file called **index.js**

```js
var Hapi = require('hapi');
var server = new Hapi.Server('0.0.0.0', 3000);

server.route({
	method: 'GET',
	path: '/{yourname*}',
	handler: function(req, reply) {
		reply('Hello ' + req.params.yourname + '!')
	}
});

server.start(function(){ // boots your server
	console.log('Now Visit: http://localhost:3000/YOURNAME')
});
```
Run:
```
node .
```

Visit: http://localhost:3000/YOURNAME (in your browser) <br />
you should see something like:
![hello world in hapi](http://i.imgur.com/m9qcs17.png)


### Validation with Joi

**Validation** is a fancy way of saying "checking" a value is
the **type** you expect it to be.

e.g. imagine you ask people to input their phone number
and some joker enters letters instead of numbers. The validation
will display a message to the person informing the data is incorrect.

[Joi](https://github.com/spumko/joi) is the validation library built by
the same team as Hapi (for use with Hapi)

A simple example:
Type out (or copy-paste) this code into a file called **hellovalidate.js**

```
// Start this app from your command line with: node hellovalidate.js
// then visit: http://localhost:3000/YOURNAME

var Hapi = require('hapi'),
    Joi  = require('joi');

var server = new Hapi.Server('0.0.0.0', 3000);

server.route({
	method: 'GET',
	path: '/{yourname*}',
	config: {  // validate will ensure YOURNAME is valid before replying to your request
		validate: { params: { yourname: Joi.string().max(40).min(2).alphanum() } },
		handler: function (req,reply) {
			reply('Hello '+ req.params.yourname + '!');
		}
	}
});

server.start(function() {
	console.log('Now Visit: http://localhost:3000/YOURNAME')
});

```

Now try entering an invalid name: http://localhost:3000/T <br />
You should see a **Validation Error**:

![Hapi Joi validation error](http://i.imgur.com/Dyhel2V.png)

This might not look like a "Friendly" Error message.
But as we will see later, it provides all the information we need
in our Client/App and we can display a more user-friendly error to people.

[Joi](https://github.com/spumko/joi) has many more useful validation methods.
We will use a few of them later on when we build our example app.

- https://github.com/spumko/joi#example
- http://vawks.com/blog/2014/03/22/the-joi-of-validation/
- https://medium.com/@_expr/creating-validation-schemas-with-joi-eb4ff19f6688

### Testing with Lab

If you're new to Software Testing read: http://en.wikipedia.org/wiki/Software_testing <br />
And watch

- Video intro to Software Development Lifecycle: http://youtu.be/qMkV_TDdDeA
- "What is Software Testing" video: http://youtu.be/UZy1Dj9JIg4
- "**How to Write Clean, Testable Code**": http://youtu.be/XcT4yYu_TTs (ignore the Java code focus on the general principals )

If you've done functional or unit testing in previous software projects you
will be at home with Lab.

Lab borrows *heavily* from [Mocha](http://visionmedia.github.io/mocha), so if you followed my
[learn-mocha](https://github.com/nelsonic/learn-mocha) tutorial this should all be familiar.

(Using the code we wrote above in the **Validation with Joi** section with a minor addition)
A simple example of testing with Lab:

```
var Lab = require("lab"),    // the Lab
    server = require("../"); // require index.js
Lab.experiment("Basic HTTP Tests", function() {
    // tests
    Lab.test("Main endpoint /{yourname*} ", function(done) {
	    var options = {
	        method: "GET",
	        url: "/Timmy"
	    };
	 	// server.inject lets you similate an http request
	    server.inject(options, function(response) {
	        Lab.expect(response.statusCode).to.equal(200);  //  Expect http response status code to be 200 ("Ok")
	        Lab.expect(response.result).to.have.length(12); // Expect result to be "Hello Timmy!" (12 chars long)
	        done();                                         // done() callback is required to end the test.
	    });
	});
});
```
First we create a *test suite* for our test **Lab.experiment**
(the first argument is the name of of the test suite "Basic HTTP Tests")

Next is a basic test that calls the only route we have `/{yourname}`
in this case**GET /Timmy**.
We expect to receive a **200** http status code and the result to be
the text "Hello Timmy!".

1. Create a **new directory** in your project called **test**
2. Create a **new file** called **test.js** in the **./test** dir
3. Type out or copy-paste the above code into **test.js**
4. Open your package.json file
5. Add a **scripts** section to the package.json file with the following:
```
  "scripts": {
    "test": "./node_modules/lab/bin/lab -c"
  }
```
6. Save the package.json file
7. run the **npm test** script from your command line to execute the tests

The result should look something like this:

![Hapi testing with Lab 100% coverage](http://i.imgur.com/AIr9MiD.png)

Note how the test script has a ** -c** flag above
this give us the **code coverage**.

We have **100% code coverage** so we can move on to our next test!

> How do you think we would write a test for an error?
> (hint: have a look inside ./test/test.js and see the second test :)


#### Related Links

- Lab github module: https://github.com/spumko/lab
- Testing post: https://medium.com/the-spumko-suite/testing-hapi-services-with-lab-96ac463c490a
- Is TDD Dead? http://www.youtube.com/watch?v=z9quxZsLcfo (hint: no!)

## Continuous Integration

Making sure your code is working as you expect it to (over time)

### Integrating Hapi with Travis CI

see: https://github.com/nelsonic/learn-travis
(I've got it working with https://github.com/nelsonic/time)


### Error Handling with Boom

[Boom](https://github.com/spumko/boom) makes custom errors easy in Hapi.
Imagine you have a page or item of content (photo, message, etc.) that
you want to protect from public view (only show to someone who is logged in)

First **install boom**:

`npm install boom --save`

Next write a test in ./test/**test.js**
(If you aren't used to "Test First" - ***trust*** the process...)

```
Lab.experiment("Authentication Required to View Photo", function() {
    // tests
    Lab.test("Deny view of photo if unauthenticated /photo/{id*} ", function(done) {
	    var options = {
	        method: "GET",
	        url: "/photo/8795"
	    };
	 	// server.inject lets you similate an http request
	    server.inject(options, function(response) {
	        Lab.expect(response.statusCode).to.equal(401);  //  Expect http response status code to be 200 ("Ok")
	        Lab.expect(response.result.message).to.equal("Please log-in to see that"); // (Don't hard-code error messages)
	        done();
	    });
	});
});
```

When you run `npm test` you will see a fail:

![Hapi auth test fail](http://i.imgur.com/Ha5WjJo.png)

Next we want to make this test pass. <br />
The easy (wrong) way of doing this is to explicitly hard-code the response for this route.
The right way is to create a generic route which responds to any request for a photo with any id.
And since we don't currently have any authentication set up, we ***mock*** (fake) it.
(Don't worry we will get to the authentication in the next step...)

```
var Boom = require('boom');
server.route({
  method: 'GET',
  path: '/photo/{id*}',
  config: {  // validate will ensure YOURNAME is valid before replying to your request
    validate: { params: { id: Joi.string().max(40).min(2).alphanum() } },
    handler: function (req,reply) {
        // until we implement authentication we are simply returning a 401:
        reply(Boom.unauthorized('Please log-in to see that'));
        // the key here is our use of the Boom.unauthorised method.
    }
  }
});

```

Our test passes but the point was to show that returning errors
with specific messages is *easy* with **Boom**.

Have a look at https://github.com/spumko/boom for more error response options.
We will be using these later as we build our app.
lets move on to authentication.



### Authentication

Authentication is the process of determining whether someone
or something is, in fact, who or what it is declared to be.

Authentication (or "Auth") is something many *novice* (*naive*?)
developers attempt to write themselves. (I was once that kid...
trust me, we have *bigger fish to fry*, use a well-written/tested library!)

We have 4 options with

1. Google - If you are building an "enterprise" or "education" app
which you know will be used in Google-enabled companies/schools I
recommend going with [Google Node.js API](https://github.com/google/google-api-nodejs-client)
2. EveryAuth - Specific to Connect/Express apps: https://github.com/bnoguchi/everyauth
3. [Passport.js](https://github.com/jaredhanson/passport) - ***100% Code Coverage*** and *many* excellent integrations http://passportjs.org/guide/providers/
4. Bell - a 3rd party Login Hapi.js Plugin


The Hapi wrapper for Passport.js is called [Travelogue](https://github.com/spumko/travelogue).

Sadly, the current version of Travelogue is not compatible with Hapi 5.x or 6.x <br />
```
npm ERR! peerinvalid The package hapi does not satisfy its siblings' peerDependencies requirements!
npm ERR! peerinvalid Peer travelogue@2.0.1 wants hapi@4.x.x
npm ERR! peerinvalid Peer yar@2.2.0 wants hapi@>=2.x.x
```
There's an open issue for it: https://github.com/spumko/travelogue/issues/83

#### Spumko/Bell

Informed by [@hueniverse](https://github.com/hueniverse) that
https://github.com/spumko/bell is the go-to alternative for 3rd Party Login
in Hapi.js apps.

- https://github.com/spumko/bell




#### Note to the Auth Innovators

If you think you've got a *genuine* improvement over existing
auth solutions email+password, [OAuth2](http://tools.ietf.org/html/rfc6749)
or newly proposed systems
such as [Persona](https://login.persona.org/about)
or [SQRL](https://www.grc.com/sqrl/sqrl.htm)
I'd *love* to hear about them or see your code on GitHub.
The rest of us will be using a 3rd Party solution.




### Caching with Catbox

https://github.com/spumko/catbox/



### Using Socket.io with Hapi

https://github.com/spumko/hapi/blob/master/examples/socketio.js
http://stackoverflow.com/questions/18343509/hapi-js-with-socket-io-where-is-socket-io-js
Requires a bit more work...



## Suggest Improvements!

If you want to extend this tutorial or simply request additional sections,
open an issue on GitHub: https://github.com/nelsonic/learn-hapi/issues



## Background Reading / Watching

- GitHub Repo: https://github.com/spumko/hapi (has documentation)
- Restify vs Express performance: http://stackoverflow.com/questions/17589178/why-should-i-use-restify
- REST API in Express: http://pixelhandler.com/posts/develop-a-restful-api-using-nodejs-with-express-and-mongoose

### Video Intro

- Hapi.js and why it's awesome: http://www.youtube.com/watch?v=ZI9wXL-add0&t=2m5s
- Hapi overview: https://www.youtube.com/watch?v=Recv7vR8ZlA (old version but concepts still relevant)

### Tutorials

- Hapi Boilerplate app: https://github.com/poeticninja/hapi-ninja [updated for Hapi 6.0!]
- Building APIs with Hapi and MongoDB: https://speakerdeck.com/donnfelker/building-web-apis-with-hapi-dot-js-and-mongodb-mongoose
- Repo for the above speakerdeck: https://github.com/donnfelker/hapi-mongodb-example
- The Pursuit of Hapi-ness: https://medium.com/the-javascript-collection/the-pursuit-of-hapi-ness-d82777afaa4b (V.3)
- Micro-tutorial: https://github.com/spumko/makemehapi
- http://blog.nodeknockout.com/post/34571027029/making-an-api-happy-with-hapi (Old version of Hapi)
- http://stackoverflow.com/questions/21455076/hapi-and-node-js-to-create-a-rest-api-server
- Hapi + Twilio (sms): http://code.tutsplus.com/tutorials/creating-a-node-web-app-with-hapi-and-twilio-integration--cms-20769
- Authentication: https://github.com/spumko/hapi-auth-cookie
- A few examples: https://github.com/andyroyle/hapi-examples
- More examples: https://github.com/wpreul/hapikc (*old* version of Hapi!)
- Pursuit of Hapi-ness: http://blog.modulus.io/nodejs-and-hapi-create-rest-api (Hapi v.2)
- BDD with Hapi and Lab: https://gist.github.com/thebillkidy/10a11fed1bf61d04c3c5

> *Respond* to these SO Q:
- http://stackoverflow.com/questions/22934340/hapi-js-api-authentication
- http://stackoverflow.com/questions/22985392/how-do-you-make-a-hapi-js-plugin-module
- http://stackoverflow.com/questions/18343509/hapi-js-with-socket-io-where-is-socket-io-js


<br /> <br /> <br />
### Note: Hapi is built by Walmart

![Hapi is Made by Walmart](http://i.imgur.com/bxYADdu.png)

Hapi is built by [@WalmartLabs](http://en.wikipedia.org/wiki/@WalmartLabs)
for Walmart.

[Walmart](http://en.wikipedia.org/wiki/Walmart) is *by far* the most successful
retailer in the world and they have achieved their success (*in part*) by
investing heavily in their *technological competitve advantage*.

If you are not keen on Walmart for any of
[these](http://en.wikipedia.org/wiki/Criticism_of_Walmart) reasons,
at least *consider* the fact that they have open-sourced their full
node stack to allow others to benefit from their hard work.

I took the time to read *extensively* about Walmart as part of my
Retail course at University
see: [History of Walmart](http://en.wikipedia.org/wiki/History_of_Walmart)
and [In Sam We Trust](http://www.bizsum.com/summaries/sam-we-trust).
The fact is that Sam Walton acheived *much* of his success through
investing in *technology*
(Barcodes, EPOS, Satelite Uplink for Logistics Tracking, etc)
to drive cost savings and passed those savings on to the
customers where other retailers got left behind with their paper-based
"*it still works, why change?*" approach.

Since Sam's passing the Walmart leadership has compromised its ethics
in favor of maximising profits. This documented in:
[The High Cost Of Low Price](https://www.youtube.com/results?search_query=Wal*Mart+-+The+High+Cost+Of+Low+Price)
and [The Wal-Mart Effect](http://en.wikipedia.org/wiki/The_Wal-Mart_Effect)

While I think we can/should continue send a
[*clear message*](http://en.wikipedia.org/wiki/Dollar_voting)
to [Bentonville](http://en.wikipedia.org/wiki/Bentonville,_Arkansas)
by prefering to spend our $¥£€ at Local & Fairtrade retailers where ever possible,
we can still *use* the ***best-in-class*** code the *fantastic engineers*
have built (to meet their *vast* supply-chain and e-commerce needs and
open-sourced) to craft our own software products/projects.

Using the transport analogy, I don't *like* using fossil fuels to get from A-to-B
because of the CO2 emmissions. But I'm *pragmatic* about how I travel
the [thousand miles](http://www.wolframalpha.com/input/?i=distance+from+London+to+Lisbon)
to visit my family twice a year. I could do two weeks by horse-and-cart,
two days by train or two hours by plane each way. Which option do you take...?
By chosing Hapi you are opting for the jet-engine.

Make up your own mind on whether you feel that using code written for Walmart
goes against your ethics. <br />
If you find a *better* open-source Node.js stack that fits your needs,
*please* ***[tell me](https://twitter.com/nelsonic)*** about it!

http://www.brainyquote.com/quotes/topics/topic_happiness.html

> https://medium.com/code-adventures/farewell-node-js-4ba9e7f3e52b
