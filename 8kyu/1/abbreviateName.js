function abbrevName(name){
    // split names to array
    let namesArray = name.split(" ");
    // create new array
    let initialArr = [];
    // for loop to grab initials and push them to the array
    for (let i = 0; i < namesArray.length; i++) {
      let eachName = namesArray[i];
      let initial = eachName[0];
      initialArr.push(initial);
    }
    // join the letters and uppercase the letters pulled
    let result = initialArr.join(".").toUpperCase();
    return result;
  }
  