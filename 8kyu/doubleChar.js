function doubleChar(str) {
    // Your code here
    let strArr = str.split('');
    let newArr = [];
    strArr.forEach((letter) => {
      newArr.push(letter.repeat(2))
    });
    let newStr = newArr.join('');
    return newStr;
  }