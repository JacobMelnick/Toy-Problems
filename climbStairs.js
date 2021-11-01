const climbStairs = (n) => {
let one = 1;
let two = 2;
while (--n) {
    two = one + two;
    one = two - one;
}
return one;
}


console.log(climbStairs(2))