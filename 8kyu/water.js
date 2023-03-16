function howMuchWater(water, load, clothes){
    // Insert your brilliant code here
    let max_load = load * 2;
    if (clothes > max_load) {
      return 'Too much clothes';
    } else if (clothes >= load) {
      let needed = water * 1.1 ** (clothes - load);
      needed = Number(needed.toFixed(2));
      return needed;
    } else {
      return 'Not enough clothes';
    }
  }
  