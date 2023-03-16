function strCount(str, letter){  
    // return the amount of times this string splits (minus one for the first) from beginning to end, with the letter as delimiter
    return str.split(letter).length - 1;
  }
  