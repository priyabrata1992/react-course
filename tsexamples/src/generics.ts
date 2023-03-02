
export function forEach<T>(elems:T[], action:(elem:T) => void) :void  {
    let i:number;
    for(i = 0; i < elems.length; i++) {
       action(elems[i]);
    }
 }

function map<T1, T2>(elements:T1[], transformFn:(e:T1) => T2): T2[] {
    let result:T2[] = [];
    forEach(elements, function (e:T1) {
        result.push(transformFn(e));
    })
    return result;
}

type fnParam<T, R> = (e:T) => R
type rsFunc<T, R> = (e:T) => R
type cacheType<T, R> = {k:T|undefined, v:R|undefined}

// function memo<T, R>(fn:fnParam<T, R>) : rsFunc<T, R> {
//     var cache:cacheType<T, R> = {
//         k: undefined,
//         v: undefined
//     }
//     return function (args) {
//         if (!cache[args]) {
//             cache[args] = fn(args);
//         }
//         return cache[args];
//     }
// }

// function memo(fn) {
//     const cache = {}
//     return function (args) {
//         if (!cache[args]) {
//             cache[args] = fn(args);
//         }
//         return cache[args];
//     }
// }