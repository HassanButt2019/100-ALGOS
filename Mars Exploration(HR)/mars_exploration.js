function marsExploration(s) {
    let count=0;
    let str = "SOS";
    let index = 0;
    for(let i =0;i<s.length ; i++)
    {
       
        for(let j = 0 ; j < str.length ; j++)
        {
            if(str[j]!==s[index])
            {
                count++;
            }
            index++;
        }
        
        i = index;
    }
    return count;
}


console.log(marsExploration("SOSTOT"))
console.log(marsExploration("SOSSPSSQSSOR"))
console.log(marsExploration("SOSSOT"))
console.log(marsExploration("SOSSOSSOS"))