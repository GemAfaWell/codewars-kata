function squareSum(numbers){
    let total = 0;
    numbers.forEach((number) => {
      let sqr = number**2;
      total += sqr;
    })
    return total;
  }
  