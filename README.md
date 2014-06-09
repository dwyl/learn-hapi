![Happiness Is...](http://i.imgur.com/Df5Z18T.jpg)

Learn Hapi [ Work in Progress ]
==========

Learning how to use the Hapi (Node.js) web framework to build scalable apps in less time.

## What is Hapi?

Hapi is *the* framework for rapidly building RESTful web services in Node.js. <br />
Whether you are building a very simple set of RESTful services 
for your website/mobile app to call or a large scale, cache heavy, 
and secure set of services, hapi has you covered. 
Hapi will help get your server developed quickly with its wide range of configurable options.

### What is a RESTful web service?

[REST](http://en.wikipedia.org/wiki/Representational_state_transfer) 
is a structured way of building web services and applications.

#### Read more about REST APIs / RESTful Web Services

- Basic Q&A for what REST is: http://katgleason.tumblr.com/post/37836552900/how-i-explained-rest-to-my-wife
- What are RESTful web services: http://stackoverflow.com/a/3636470/1148249
- REST Wikipedia: http://en.wikipedia.org/wiki/REST (you don't need to know all of it, just understand the concept)
- [CRUD](http://en.wikipedia.org/wiki/Create,_read,_update_and_delete)

Some relevant points in REST:

 * Each URL on the server represents a resource; either a _collection resource_ or an _element resource_.
  * A **collection resource** would be available at a URL like `http://yourapp.io/items/` which would be a _representation_ of a list of items.
  * A **element resource** would be available at a URL like `http://yourapp.io/items/2` which would be a _representation_ of a single item, identified by `2`.
 * Different HTTP methods are used for different "" operations:
  * a **GET** is a read operation
  * a **PUT** is a write/modify operation
  * a **POST** is a create/new operation
  * a **DELETE** deletes a record on the server.
 * State (or rather, client context) is not stored on the server-side; all state is in the _representations_ passed back and forth by the client's requests and the server's responses.

 <small>Adapted from:  </small>

### Video Intro:

> *Watch* this video: http://youtu.be/BsyvnVOhp4U (good/recent intro to HAPI)

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
they have developed Hapi follwing [Benchmark Driven Development](https://github.com/felixge/faster-than-c)
and the result is a high-performance framework.
- ***Security*** - they have focussed on security and battle-tested the framework
during [Black Friday](http://nodeup.com/fiftysix) 
(holiday shopping busy day) without incident.
- **Mobile Optimised** (lightweight - built for mobile e-commerce)
- Plugin Architecture - easy to extend / add your own modules (good ecosystem)
- ***DevOps Friendly*** (great stats logging) see: https://github.com/spumko/good
- Built-in ***Caching*** (Redis, MongoDB or Memcached)
- **100% Code Coverage** (for the core)
- Key Functionality is **Built-in** and good plugins add other functionality seamlessly.


## Dive In!

## Requirements

- A computer that can run [Node.js](http://nodejs.org/download/)  Mac/Windows/Linux/Chromebook
- Access to the Internet (only required for installation)
- 60 minutes of time.

### Hello World in Hapi

Create a new folder for your Hapi project:

```
mkdir makemehapi && cd makemehapi
```

Initialise the folder as Node.js project:

```
npm init
```
(Use all the default values you can change them later)

Download and save Hapi:

```
npm install hapi --save
```

Type out (or copy-paste) this code into a file called **hellohapi.js**

```
// Start the app from your command line with: node hellohapi.js
// then visit: http://localhost:3000/YOURNAME in your browser

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

Visit: http://localhost:3000/YOURNAME (in your browser) <br />
you should see something like:
![hello world in hapi](http://i.imgur.com/m9qcs17.png)


### Validation with Joi

- https://github.com/spumko/joi#example
- http://vawks.com/blog/2014/03/22/the-joi-of-validation/

### Caching with Catbox

https://github.com/spumko/catbox/

### Testing with Lab


https://medium.com/the-spumko-suite/testing-hapi-services-with-lab-96ac463c490a
https://github.com/spumko/lab

### Error Handling with Boom

### Using Socket.io with Hapi

https://github.com/spumko/hapi/blob/master/examples/socketio.js 
Requires a bit more work...


## Background Reading / Watching

- GitHub Repo: https://github.com/spumko/hapi (has documentation)
- Restify vs Express performance: http://stackoverflow.com/questions/17589178/why-should-i-use-restify
- REST API in Express: http://pixelhandler.com/posts/develop-a-restful-api-using-nodejs-with-express-and-mongoose

### Video Intro

- Hapi.js and why it's awesome: http://www.youtube.com/watch?v=ZI9wXL-add0&t=2m5s
- Hapi overview: https://www.youtube.com/watch?v=Recv7vR8ZlA (old version but concepts still relevant)

### Tutorials

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

>> *Respond* to this SO Q: 
- http://stackoverflow.com/questions/22934340/hapi-js-api-authentication
- http://stackoverflow.com/questions/22985392/how-do-you-make-a-hapi-js-plugin-module
- http://stackoverflow.com/questions/18343509/hapi-js-with-socket-io-where-is-socket-io-js


<br /> <br /> <br />
### Warning: Hapi is built by Walmart

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
please [tell me](https://twitter.com/nelsonic) about it!

http://www.brainyquote.com/quotes/topics/topic_happiness.html