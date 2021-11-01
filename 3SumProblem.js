const threeSum = (num) => {
let sum = [];
num.sort((a, b) => a - b);

for (let i = 0; i <= num.length - 3; i++) {
    const curr = num[i];
    if (curr === num[i - 1]) {
        continue;
    };

    let left = i + 1;
    let right = num.length - 1;

    while (left < right) {
        let total = curr + num[left] + num[right];
        if (total < 0) {
            left++;
        } else if (total > 0) {
            right--;
        } else if (curr !== num[left] !== num[right]) {
            sum.push([curr, num[left], num[right]]);
            left++;
            right--;
        }
    }
}
let unique = new Set([...sum])
return [...unique]
}



console.log(threeSum([-1,0,1,2,-1,-4]));