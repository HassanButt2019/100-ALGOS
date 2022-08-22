function beautifulBinaryString(b) {
    let count = 0;
    for(let i = 2 ; i < b.length ; i++)
    {
        if(b[i]==="0")
        {
            if(b[i-1]==="1" && b[i-2]==="0")
            {
                b = b.split("");
                b[i] = "1"
                b = b.join("")
                count++;
            }
        }else  if(b[i]==="1")
        {
            if(b[i-1]==="0" && b[i-2]==="1")
            {
                b = b.split("");
                b[i] = "0"
                b = b.join("")
                count++;
            }
        }
    }
    return count;
}
console.log(beautifulBinaryString("0101010"))
console.log(beautifulBinaryString("0100101010"))
