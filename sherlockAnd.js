const sum = (acc, next) => acc + next;

const ifMatches = (val, i, arr) => {
    let count = 0;
    for (++i; i < arr.length; i++) {
        if (val == arr[i]) {
            count++
        }
    }
    return count;
}

const sherlockAndAnagrams = (s) => {
let strings = [];

for (let size = 1; size < s.length; size++) {
    let temp = [];

    for (let i = 0; i <= s.length - size; i++) {
        temp.push(s.substr(i, size).split('').sort().join(''));
    }
    temp = temp.map(ifMatches)
    strings.push(temp.reduce(sum))
}
return strings.reduce(sum)
}