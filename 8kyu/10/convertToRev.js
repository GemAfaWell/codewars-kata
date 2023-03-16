function digitize(n) {
    //code here
    // string it
    let nStr = n.toString();
    // split it and reverse it
    let revStr = nStr.split("").reverse();
    // create array
    let revNum = [];
    // for loop to push nums to array
    for (let i = 0; i < revStr.length; i++) {
      revNum.push(parseFloat(revStr[i]));
    }
    // return array
    return revNum;
    
  }
  