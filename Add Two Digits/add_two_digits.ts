

function addTwoNumbers(a:any):number{
    const numbers = a.toString().split("");
    return numbers.reduce((b:string , c:string)=>{
        return parseInt(b)+parseInt(c);
    })

}

console.log(addTwoNumbers("29"))