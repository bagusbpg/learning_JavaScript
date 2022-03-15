/*
A space explorer's ship crashed on Mars! They send a series of SOS messages
to Earth for help. Letters in some of the SOS messages are altered by cosmic
radiation during transmission. Given the signal received by Earth as a string,
s, determine how many letters of the SOS message have been changed by radiation.

Example
s = 'SOSTOT'
The original message was SOSSOS. Two of the message's characters were changed
in transit.

Function Description
Complete the marsExploration function in the editor below.
marsExploration has the following parameter(s):
string s: the string as received on Earth

Returns
int: the number of letters changed during transmission

Input Format

There is one line of input: a single string, s.

Constraints
1 <= length of s <= 99
length of s modulo 3 = 0
s will contain only uppercase English letters, ascii[A-Z].
*/

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
