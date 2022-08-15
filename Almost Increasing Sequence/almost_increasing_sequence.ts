function almostIncreasingSequence(numbers : number[]):boolean{

    let count = 0;

    for(let i = 0 ; i < numbers.length ; i++)
    {
        if(numbers[i] <= numbers[i-2])
        {
            count++;
            if(numbers[i]<= numbers[i-2] && numbers[i+1] <= numbers[i-1])
            {
                return false;
            }
        }
    }




    return count<=1;

}


console.log(almostIncreasingSequence([1,2,3,2,1]));
console.log(almostIncreasingSequence([1,2,3]));
