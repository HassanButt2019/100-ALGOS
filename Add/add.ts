function addNumber(a:number , b:number):number{
    return a+b;
}

console.log(addNumber(1,2))

function addMultiple(...params : number[]):number{
    let totalSum = 0;

    params.forEach((num)=>{
        totalSum += num;
    });

    return totalSum;
}

console.log(addMultiple(1,2,3,4,5))