function alphabaticShift(inputArray :string):string{
    let alphabats : object = {
        "a":"b","b":"c","c":"d","d":"e","e":"f","f":"g","g":"h","h":"i","i":"j",
        "j":"k","k":"l","l":"m","m":"n","n":"o","o":"p","p":"q","q":"r","r":"s",
        "s":"t","t":"u","u":"v","v":"x","x":"y","y":"z","z":"a"
    }
    let inputShifted = inputArray.split("") ;

    for(let i = 0; i < inputShifted.length ; i++)
    {
        inputShifted[i] = alphabats[inputArray[i]];
    }

    return inputShifted.join("");
}


console.log(alphabaticShift("crazy"))