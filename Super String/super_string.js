function twoStrings(s1, s2) {

    let isTrue = false;
    let result = "NO";

    for(let i = 0 ; i < s1.length ; i++)
    {
        for(let j = 0 ; j < s2.length ; j++)
        {
            if(s1[i]===s2[j])
            {
                isTrue = true;
            }
        }
    }
    if(isTrue)
    {
        result = "YES"
    }else
    {
        result = "NO";
    }
    return result;
}



console.log(twoStrings("hello","world"))
console.log(twoStrings("hi","world"))