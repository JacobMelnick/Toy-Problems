const isValid = (s) => {
    const data = [];

    const legends = {
      "(": "(",
      "{": "{",
      "[": "[",
    };
  
    const check = {
      "(": ")",
      "{": "}",
      "[": "]",
    };
  
    for (let i = 0; i < s.length; i++) {
      const char = s[i];
      if (legends[char] === char) {
        data.push(char);
      } else if (check[data.pop()] !== s[i]) {
        return false;
      }
    }
    return data.length ? 0 : 1;
}

console.log(isValid('()'));