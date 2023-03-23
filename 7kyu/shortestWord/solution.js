function findShort(s){
    // split the string into an array by space delimiter
    const arr = s.split(" ");
    // sort array by word length
    const sortedArr = arr.sort((a,b) => a.length - b.length);
    // return the length of the shortest word (at the beginning)
    return sortedArr[0].length;
  }
  