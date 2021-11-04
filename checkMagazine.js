const checkMagazine = (magazine, note) => {
    let map = {};
    let value = true
     for (let i of magazine) {
         map[i] = (map[i] || 0) + 1
     }
     for (const i of note) {
         map[i] = (map[i] || 0) - 1
     }
     for (let i in map) {
         if (map[i] < 0) {
             value = false;
             break;
         }
     }
     
    return value ? 'YES' : 'NO'
 }
 
 console.log(checkMagazine([ 'two', 'times', 'three', 'is', 'not', 'four' ], [ 'two', 'times', 'two', 'is', 'four' ]));