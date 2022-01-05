const substrCount = (n , s) => {
let count = n;

for (let i = 0; i < s.length; i++) {
    let next = i;
    while (s[i] === s[next + 1]) {
        next++
    }
    if (i !== next) {
        const length = next - i;
        count = count + (length * (length + 1) / 2);
        i = next;
    } else {
        let step = 1
        while (
            s[i + step] === s[i - step] && s[i + step] === s[i + 1]) {
                step++
                count++
            }
        
    }
}
return count;
}


console.log(substrCount(4, 'aaaa'));