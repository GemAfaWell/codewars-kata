function countSheep(arrayOfSheep) {
    // set total
    let total = 0;
    // iterate through the array
    for (let i = 0; i <= arrayOfSheep.length; i++) {
      // if array item states 'true', count
      if (arrayOfSheep[i] === true) {
        total = total + 1;
      // otherwise, don't count
      } else {
        total = total;
      }
    }
    return total;
  }
