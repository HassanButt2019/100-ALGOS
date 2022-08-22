function RunLength(str) { 

    let resultStr = "";
    let strList = str.split("");
    
    let count =0;
      for(let i = 0 ; i < strList.length ; i++)
      {
          let variable = strList[i];
          for(let j =i; j<strList.length ; j++)
          {
              if(variable === strList[j])
              {
                  count++;
                  if(variable === strList[j+1])
                        i++;
              } 

              if(variable != strList[j+1])
              {
                  break;
              }
          }

        resultStr +=parseInt(count) + variable;
        // if(variable===strList[i+1])
        //  i++;
       
        count = 0;
      }
      console.log(resultStr);

    
      return resultStr; 
    
    }
       
    // keep this function call here 
    console.log('Test 1 passing: ' + (RunLength("aabbbcde") == '2a3b1c1d1e'));
    console.log('Test 2 passing: ' + (RunLength("wwwbbbw") == '3w3b1w'));