
/*Its length is at least 6.
It contains at least one digit.
It contains at least one lowercase English character.
It contains at least one uppercase English character.
It contains at least one special character. The special characters are: !@#$%^&*()-+ */

function minimumNumber(n, password) {

    let need = 0;
    let total = 5;
    let lengthShouldHave = 6;
    let numbers = "0123456789".split("")
    let lower_case = "abcdefghijklmnopqrstuvwxyz".split("")
    let upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
    let special_characters = "!@#$%^&*()-+".split("");
    let num_bool, n_bool , l_bool , u_bool , s_bool;
    num_bool = (lengthShouldHave <= n)?0:1;
    n_bool = password.split("").some(r=> numbers.indexOf(r)>= 0)?0:1;
    l_bool = password.split("").some(r=> lower_case.indexOf(r)>= 0)?0:1;
    u_bool = password.split("").some(r=> upper_case.indexOf(r)>= 0)?0:1;
    s_bool =password.split("").some(r=>special_characters.indexOf(r)>= 0)?0:1 ;
    need = num_bool + n_bool + l_bool + u_bool + s_bool





     return n+need<6 ? 6-n :need;
}   


console.log(minimumNumber( 3, "Ab1"));
console.log(minimumNumber( 11, "#HackerRank"));


