function findNextSquare(sq) {
    // declare variable for square root of a number
    let squareRoot = Math.sqrt(sq);
    // Return the next square if sq is a perfect square, -1 otherwise
    return Number.isInteger(squareRoot) == true ? (squareRoot + 1) ** 2 : -1;
  }