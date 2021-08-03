const plusOne = (digits) => {
digits[digits.length - 1] = digits[digits.length - 1] + 1
return digits
}

console.log(plusOne([1, 2, 3]));