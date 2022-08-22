function stringConstruction(s) {
    // Write your code here
    let count = 0;
    let resultStr = "";

    for(let i = 0 ; i < s.length ; i++)
    {
        if(!resultStr.includes(s[i]))
        {
            resultStr += s[i];
            count++;
        }
    }

    return count;
}


console.log(stringConstruction("abcd"))
console.log(stringConstruction("abab"))