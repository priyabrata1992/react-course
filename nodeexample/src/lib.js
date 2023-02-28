//Functional style of programming
//Higher order functions:
/*
    A function that -
        1. Accept a function as a param.
        2. Return a function.
*/  

//Pure function: forEach
// function forEach(elems) {
//     for(i = 0; i < elems.length; i++) {
//         console.log(elems[i]);
//     }
// }

// Higher order equivalent: forEach
function forEach(elems, action) {
    for(i = 0; i < elems.length; i++) {
        action(elems[i]);
    }
}

//HOF examples: filter, map, reduce
// Filter --> return a subset based on a predicate function
function filter(elements, predicate) {
    let result = [];
    forEach(elements, function(e){
        if (predicate(e)) {
            result.push(e);
        }
    });
    return result;
}

function map(elements, transformFn) {
    let result = [];
    forEach(elements, function (e) {
        result.push(transformFn(e));
    })
    return result;
}

//Function returning another function
//Closure --> Inner function can access all members of outer function
//Can be useful for implementing memoization.
function adder(base) {
    return function (value) {
        return base + value;
    }
}

function memo(fn) {
    const cache = {}
    return function (args) {
        if (!cache[args]) {
            cache[args] = fn(args);
        }
        return cache[args];
    }
}

/* 
    Everything is private by default
    in order to make it public, it needs to be exported.
*/

module.exports = {
    forEach,
    filter,
    map
}