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

/* 
    Everything is private by default
    in order to make it public, it needs to be exported.
*/

module.exports = {
    forEach,
    filter
}