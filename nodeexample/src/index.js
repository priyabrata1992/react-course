let { forEach, filter, memo } = require('./lib');

let data = [1, 4, 2, 5, 7, 9, 3];
// forEach(data, console.log);

isOdd = (e) => e % 2 !== 0;
let r1 = filter(data, function(e) { return e % 2 === 0 });
let r2 = filter(data, isOdd);
forEach(r2, console.log);

function sumOf(n) {
    var sum = 0;
    for(i = 1; i <= n; i++){
        sum += i;
    }
    return sum;
}

const memoSum = memo(sumOf);
console.log(memoSum(5));
console.log(memoSum(5));