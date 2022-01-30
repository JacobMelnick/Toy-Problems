const strStr = (haystack, needle) => {
  if (!haystack.includes(needle)) {
    return 0;
  }
  if (haystack === "") {
    return 0;
  }

 return haystack.indexOf(needle);
};
console.log(strStr("hello", "ll"));
