const lengthOfLastWord = (str) => {
    if (str === '') {
        return 0
    }    
    let newArr = []
    str = str.split(' ')
    
    for (let i = 0; i < str.length; i++) {
        const curr = str[i];
        if (curr !== '') {
            newArr.push(curr)
        }
    }
    if(newArr.length === 0 ) {
        return 0
    }
    return newArr[newArr.length - 1].length
}

console.log(lengthOfLastWord("Hello world pancakes"));
console.log(lengthOfLastWord("a "));
console.log(lengthOfLastWord("b   a    "));
