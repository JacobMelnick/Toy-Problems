const luckBalance = (k, contests) => {
  let final = 0;
  let important = 0;
  let smallest = [];
  let lowestNum = 0;
  for (let i = 0; i < contests.length; i++) {
    const curr = contests[i];
    final += curr[0];
    important += curr[1];

    if (curr[1] === 1) {
      console.log(curr[0]);
      smallest.push(curr[0]);
    }
  }
  if (smallest.length >= k) {
    let length = smallest.length;
    while (length >= k) {
      lowestNum += Math.min(...smallest);
      length--;
    }
  }

  return final - lowestNum;
};

console.log(
  luckBalance(8, [
    [13, 1],
    [10, 1],
    [9, 1],
    [8, 1],
    [13, 1],
    [12, 1],
    [18, 1],
    [13, 1],
  ])
);
