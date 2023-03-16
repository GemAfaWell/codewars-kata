function century(year) {
    // Finish this
    // if the year is a year that ends in 00
    if (year % 100 == 0) {
      // return the floor division of the number to call the correct century
      return Math.floor(year / 100);
      // otherwise
    } else {
      // return the floor division of the number + 1 to call the correct century
      return Math.floor(year / 100) + 1;
    }
    
}
  