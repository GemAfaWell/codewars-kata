function invert(array) {
    // declare array
    let newArr = new Array();
    // for loop to push negative values to new array
    for (let i = 0; i < array.length; i++) {
      newArr.push(array[i] * (-1));
    }
    return newArr;
  }