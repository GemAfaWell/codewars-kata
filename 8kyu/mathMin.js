class SmallestIntegerFinder {
    // find the smallest integer
    findSmallestInt(args) {
      // iterate through the array
      args.forEach((num) => {
        // compare values to one another
        let comp = (a, b) => {
          return a - b;
        }
        // sort by comparison
        args.sort(comp);
      })
      // return smallest number by returning first number in array
      return args[0];
    }
  }
  