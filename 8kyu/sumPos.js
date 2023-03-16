function positiveSum(arr) {
    let sum = 0;
    // for loop to add based on value of item in array
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] >= 0) {
        sum = sum + arr[i];
      } else {
        sum = sum;
      }
    }
    return sum;
  }
  