function addTwoDigits(a){
    const numbers = a.toString().split("");
    return numbers.reduce((b , c)=>{
        return parseInt(b)+parseInt(c);
    })

}

console.log(addTwoDigits("29"))