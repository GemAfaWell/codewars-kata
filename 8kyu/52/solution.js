function removeEveryOther(arr){
    // establish new array
    let newArr = new Array();
    // array iteration
    for(let i = 0; i < arr.length; i++) {
      // ternary operator to push the items to the new array
      Math.abs(i) % 2 === 0 ? newArr.push(arr[i]) : arr[i] = arr[i];
    }
    return newArr;
  }
  