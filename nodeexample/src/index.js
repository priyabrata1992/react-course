let { forEach, filter } = require('./lib');

let data = [1, 4, 2, 5, 7, 9, 3];
// forEach(data, console.log);

isOdd = (e) => e % 2 !== 0;
let r1 = filter(data, function(e) { return e % 2 === 0 });
let r2 = filter(data, isOdd);
forEach(r2, console.log);