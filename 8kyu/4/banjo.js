function areYouPlayingBanjo(name) {
    // turn string into array
    let nameStr = name.split("");
    // conditional loop to search name and return string based on name's first letter being R/r
    if (nameStr[0] == "r" || nameStr[0] == "R") {
      return `${name} plays banjo`;
    } else {
      return `${name} does not play banjo`
      }
  }
  