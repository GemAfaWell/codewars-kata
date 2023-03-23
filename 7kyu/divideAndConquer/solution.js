function divCon(x){
    // set variable for total
    let total = 0;
    // iterate through given array
    x.forEach((num) => {
        typeof num === 'string' ? total -= parseInt(num) : total += num;
    });
    return total;
}
