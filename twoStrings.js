function twoStrings(s1, s2) {
    // Write your code here
 let result = 'NO';
 const length1 = s1.length;
 const length2 = s2.length;
 
 if (length1 >= 1 && length1 <= 100000 && length2 >= 1 && length2 <= 100000) {
     result = (s1.split('').filter((el, key) => 
         s2.indexOf(el) > -1 ).length > 0) ? 'YES' : 'NO';
 }
 
 return result;
}
