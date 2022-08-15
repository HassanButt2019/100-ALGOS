function funnyString(s) {

    let n = s.split("");
    let r = n.reverse();
    console.log(r);
    let j = 1;
    for(let i = 1; i < n.length; i++){
       if(Math.abs(n[i].charCodeAt() - n[i-1].charCodeAt()) ===
          Math.abs(r[i].charCodeAt() - r[i-1].charCodeAt())){
            j++;
          }
     }
      return j === n.length ? "Funny" : "Not Funny"
    
    }
    
  

console.log(funnyString("acxz"));
