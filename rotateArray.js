const rotate = (numArr, k) => {
  let rotations = k % numArr.length;
    let temp = numArr.splice(numArr.length - rotations, numArr.length);
    numArr.unshift(...numArr);
};


console.log(rotate([1,2,3,4,5,6,7], 3));

