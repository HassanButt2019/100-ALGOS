function allLongestString(arr:string[]):string[]{
    let length = 0;
    const longestWords = [];

    arr.forEach((word)=>{
        length = length < word.length ? word.length : length;
    })

    arr.forEach((word)=>{
        if(length == word.length)
        {
            longestWords.unshift(word);
        }
    })

    return longestWords;
}

console.log(allLongestString(["aba","ac","ad","vc","aba","afa"]))