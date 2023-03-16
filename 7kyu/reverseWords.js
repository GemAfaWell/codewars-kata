function reverseWords(str) {
    // split the original string
    let splitStrings = str.split(" ");
    // create a new array
    let newStr = [];
    // for loop to reverse each word and push it to a new array
    for (let i = 0; i < splitStrings.length; i++) {
      let revWord = splitStrings[i].split("").reverse().join("");
      newStr.push(revWord);
    }
    // join the elements of the array into a string
    let sentence = newStr.join(" ");
    // return the string
    return sentence;
  }
