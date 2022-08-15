

function superDigit(n, k) {
    var sum = 0;

    if(k==0)
    {
        return n;
    }
    while(n >0)
    {
        sum = sum + (n % 10);
        n= Math.floor(n / 10);
    }

   return superDigit(sum , k-1)

}


console.log(superDigit(9875 , 4))