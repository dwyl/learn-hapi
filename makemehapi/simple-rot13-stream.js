var Stream = require('stream');
var Util = require('util');

/*
  To Use:

  var rot13 = new ROT13Stream();
  streamOne.pipe(rot13).pipe(process.stdout); // takes readstream streamOne, modifies with rot13, pipes into stdout
*/


function ROT13Stream() {
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

module.exports = ROT13Stream;
