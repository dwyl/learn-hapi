var Fs = require('fs');
var Hapi = require('hapi');
var Stream = require('stream');
var Util = require('util');
var server = Hapi.createServer('localhost', Number(process.argv[2] || 8081));

function ROT13Stream () {

    Stream.Transform.call(this);
}
Util.inherits(ROT13Stream, Stream.Transform);

ROT13Stream.table = {
    A: 'N',
    B: 'O',
    C: 'P',
    D: 'Q',
    E: 'R',
    F: 'S',
    G: 'T',
    H: 'U',
    I: 'V',
    J: 'W',
    K: 'X',
    L: 'Y',
    M: 'Z',
    N: 'A',
    O: 'B',
    P: 'C',
    Q: 'D',
    R: 'E',
    S: 'F',
    T: 'G',
    U: 'H',
    V: 'I',
    W: 'J',
    X: 'K',
    Y: 'L',
    Z: 'M',
    a: 'n',
    b: 'o',
    c: 'p',
    d: 'q',
    e: 'r',
    f: 's',
    g: 't',
    h: 'u',
    i: 'v',
    j: 'w',
    k: 'x',
    l: 'y',
    m: 'z',
    n: 'a',
    o: 'b',
    p: 'c',
    q: 'd',
    r: 'e',
    s: 'f',
    t: 'g',
    u: 'h',
    v: 'i',
    w: 'j',
    x: 'k',
    y: 'l',
    z: 'm'
};

ROT13Stream.prototype._transform = function (data, encoding, callback) {

    encoding = (encoding == 'buffer' ? 'utf8' : encoding);
    data = data.toString(encoding);

    var modified = "";
    var l = data.length;
    for(var i = 0;i<l;i++) {
        if (ROT13Stream.table.hasOwnProperty(data[i])) {
            modified += ROT13Stream.table[data[i]];
        } else {
            modified += data[i];
        }
    }
    this.push(modified, encoding);

    callback();
};


server.route({
    method: "GET",
    path: "/",
    config: {
        handler: function (request, reply) {
            var thisfile = Fs.createReadStream(__dirname + '/input.txt');
            var rot13 = new ROT13Stream();

            reply(thisfile.pipe(rot13));
        }
    }
});

server.start();
