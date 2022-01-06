const luckBalance = (k, contests) => {
  let final = 0;
  let important = 0;
  let lowestNum = 0;
  let smallest = [];

  for (let i = 0; i < contests.length; i++) {
    const curr = contests[i];
    final += curr[0];
    important += curr[1];

    if (curr[1] === 1) {
      smallest.push(curr[0]);
    };
  };

  smallest.sort((a, b) => a - b);
  
  if (smallest.length >= k) {
    let length = smallest.length;
    while (length > k) {
      lowestNum += Math.min(...smallest);
      lowestNum += Math.min(...smallest);
      smallest.shift();
      length--;
    }
  }
  return final - lowestNum;
};

console.log(
  luckBalance(5, [
    [13, 1],
    [10, 1], // win
    [9, 1], // win
    [8, 1], // win
    [13, 1],
    [12, 1],
    [18, 1],
    [13, 1],
  ])
);
