function allLongestStrings(arr){
    let length = 0;
    const longestWords = [];

    arr.forEach((word)=>{
        length = length < word.length ? word.length : length;
    })

    arr.forEach((word)=>{
        if(length == word.length)
        {
            console.log(word);
            longestWords.unshift(word);
        }
    })

    return longestWords;
}

console.log(allLongestStrings(["aba","ac","ad","vc","aba","afa"]))