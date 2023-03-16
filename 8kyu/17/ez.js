function problem(x){
    //your code here
    // if value is a string, return Error
    if (typeof x === 'string') {
      return "Error";
    } else {
    // return variable multiplied by 50 and increased by 6
      return x * 50 + 6;
    }
  }
  