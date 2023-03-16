function getCount(str) {
    let vowelCount = 0 
    for (let i of str) {
        (i==='a'|| i==='e'|| i==='i'||i==='o'||i==='u') ? vowelCount++ : vowelCount;   
    } 
    return vowelCount;
}