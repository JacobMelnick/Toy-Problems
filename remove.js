
const removeDuplicates = (array) => {
let numOfDuplicates = 0
for (let i = 0; i < array.length; i++) {
  const curr = array[i]
  if (curr != array[i + 1]) {
      array[numOfDuplicates++] = curr
  }
}

return numOfDuplicates
}


console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))