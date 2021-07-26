/* eslint-disable no-multiple-empty-lines */

const equivalentFolded = (array, identity, operation) => {
    let result = identity;
    array.map((curr, i) => {
    result = operation(result, curr[i]);
    })
return result;
}

console.log(equivalentFolded([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))