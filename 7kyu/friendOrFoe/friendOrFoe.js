function friend(friends){
    let newArr = [];
    friends.forEach((friend) => {
      friend.length === 4 ? newArr.push(friend) : friend;
    })
    return newArr;
  }
  