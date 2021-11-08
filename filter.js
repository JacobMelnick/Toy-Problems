const sentence = 'adsf asdf 345';

const filterF = (s) => {
s = s.split(' ')
let result = s.filter((word) => {
    if (!word.includes('{') && !word.includes('(')) {
        return word
    }
})
console.log(result)
}

console.log(filterF(sentence))