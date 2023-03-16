let swap = (string) => {
    let str = string.split("");
    for (let i = 0; i < str.length; i++) {
      str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u' ? str[i] = str[i].toUpperCase() : str[i];
    }
    let newStr = str.join("");
    return newStr;
  }