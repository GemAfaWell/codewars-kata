function lovefunc(flower1, flower2){
    // conditional loop to determine whether or not these numbers are what they need to be (one even, one odd)
    // if both are even, return false
    if (flower1 % 2 === 0 && flower2 % 2 === 0) {
      return false;
    // if both are odd, return false
    } else if (flower1 % 2 !== 0 && flower2 % 2 !== 0) {
      return false;
    // otherwise, return true
    } else {
      return true;
    }
  }
  