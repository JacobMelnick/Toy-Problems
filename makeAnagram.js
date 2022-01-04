const makeAnagram = (a, b) => {
  a.split("").forEach((n) => {
    if (b.includes(n)) {
      a = a.replace(n, "");
      b = b.replace(n, "");
    }
  });

  return a.length + b.length;
};

console.log(makeAnagram("cde", "abc"));
