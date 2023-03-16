function hero(bullets, dragons){
    // conditional to determine if this hero is gonna survive or nah
    if (bullets / dragons >= 2) {
      return true;
    } else if (bullets === 0 && dragons === 0) {
      return true;
    } else {
      return false;
    }
  }
  