 
 const palindromeNum = (x) => {
     x = x.toString()
     let newNum = x.split('').reverse().join('')
    return x === newNum ? true : false
 }

 console.log(palindromeNum(121));
 console.log(palindromeNum(1001001));