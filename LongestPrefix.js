
const longestPrefix = (arr) => {
// iterate over the array of strings
if (arr.length  < 1) {
    return ''
}
if (arr.length === 1) {
    return arr[0]
}
let firstString = arr[0]

for (let i = firstString.length; i >= 0; i--) {
    let matching = 0
    for (let j = 1; j < arr.length; j++) {
        const curr = arr[j];
        if (firstString === curr.substring(0, i)) {
            matching++

        } else {
            continue
        }
    }
    if (matching === arr.length - 1) {
        return firstString
    }
    firstString = firstString.substring(0, i - 1)
}
    // check to see if first letter of first string matches on all strings 
        //if the letter does match add to prefix string
    // else
    // return empty string



}

console.log(longestPrefix(["dog","racecar","car"]));