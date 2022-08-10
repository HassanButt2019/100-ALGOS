function add( a ,b)
{
    return a+b;
}


console.log(add(1,2))


function addMultipleNumber(...params)
{
    let totalSum = 0;
    params.forEach((num)=>{
        totalSum += num;
    })

    return totalSum;
}


console.log(addMultipleNumber(1,2,3,4));