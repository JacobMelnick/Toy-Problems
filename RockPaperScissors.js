/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   ["RRR",
*    "RRP",
*    "RRS",
*    "RPR",
*    ...etc...
*   ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
*
* Example:
* rockPaperScissors(5); // => ['RRRRR', 'RRRRP', 'RRRRS', etc...]
*
*/
// input = number (number of rounds called)
// output = an array of strings (the posibile throws)
// edge case = if the input isnt a number

function rockPaperScissors(rounds) {
  // check edge case
  const rpsArray = [];
  // create an inner recursive function that would take currentthrow as input
  function innerRockFunction(currentThrow) {
    // set input to be itself or an empty string
    currentThrow = currentThrow || '';
    // check if inputs length is equal to rounds
    if (currentThrow.length === rounds) {
      // push to rps array
      rpsArray.push(currentThrow);
      return;
    }
    // return
    // else
    const posibilities = ['R', 'P', 'S'];
    // iterate over the array of posibilities
    for (let i = 0; i < posibilities.length; i++) {
      // call our innerfunction on current iteration plus inner function input
      innerRockFunction(currentThrow + posibilities[i]);
    }
  }

  // call innerfunction
  innerRockFunction();
  return rpsArray;
}




console.log(rockPaperScissors(3))