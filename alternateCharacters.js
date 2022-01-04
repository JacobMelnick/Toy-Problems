const alternatingCharacters = (string) => {
string = string.toLowerCase()
let newString = ''
for (let i = 0; i < string.length; i++) {
    const curr = string[i];
    if (curr !== string[i + 1]){
        newString += curr

    }
}
return string.length - newString.length
}

console.log(alternatingCharacters('BABABA'));