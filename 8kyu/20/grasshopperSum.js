var summation = (num) => {
    // create an empty array
    let newArr = new Array();
    // create variable for sum
    let total = 0;
    // for loop to add each number from 1 to num
    for (let i = 1; i <= num; i++) {
      total += i;
    }
    // return sum
    return total;
  }
  