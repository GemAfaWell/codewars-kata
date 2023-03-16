function countBy(x, n) {
    // declare array
    let z = [];
    //for loop to push numbers to new array, then returning result
    for (let i = 1; i <= n; i++) {
      z.push(i*x);
    }
    return z;
  }
  