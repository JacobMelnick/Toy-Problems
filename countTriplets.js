const countTriplets = (arr, r) => {
let count = 0;
const first = {};
const second = {};

if (arr.length < 3) {
    return 0;
}

for (let i = arr.length - 1; i >= 0; i--) {
    let d1 = arr[i];
    let d2 = d1 * r;
    let d3 = d2 * r;
    count += second[d3] || 0;
    second[d2] ? second[d2] += first[d2] || 0 : second[d2] = first[d2] || 0;
    first[d1] ? first[d1]++ : first[d1] = 1
}
return count
}


console.log(countTriplets([1, 3, 9, 9, 27, 81], 3))