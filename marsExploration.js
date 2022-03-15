"use strict";

function marsExploration(s) {
    // Write your code here
    let count = 0;
    
    for (let i = 0; i < s.length; i++) {
        let str = s.substr(i, 1);
        let x = i % 3;
        
        if (x == 1) {
            if (str != "O") {
                count++;
            }
        } else {
            if (str != "S") {
                count++;
            }
        }
    }
    
    return count
}


let s = "SOSSPSSQSSOR";
let count = marsExploration(s);

console.log(count);
