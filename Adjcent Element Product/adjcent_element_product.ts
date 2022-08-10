function adjcentElementProduct(arr : number[]):number{
    let largestProduct = arr[0] * arr[1];

    for(let i = 1; i < arr.length-1 ; i++){
        let product = arr[i] * arr[i+1];

        largestProduct = largestProduct < product ? product : largestProduct;
    }

    return largestProduct;
}

console.log(adjcentElementProduct([3,7,-6,2,1,3]));