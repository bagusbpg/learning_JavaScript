/*
A pangram is a string that contains every letter of the alphabet.
Given a sentence determine whether it is a pangram in the English
alphabet. Ignore case. Return either pangram or not pangram as
appropriate.

Example
s = "The quick brown fox jumps over the lazy dog"
The string contains all letters in the English alphabet, so return
pangram.

Function Description
Complete the function pangrams in the editor below. It should return
the string pangram if the input string is a pangram. Otherwise, it
should return not pangram.
pangrams has the following parameter(s):
string s: a string to test

Returns
string: either pangram or not pangram

Input Format
A single line with string s.

Constraints
0 < length of s <= 10^3
Each character of s, s[i] E {a-z, A-Z, space}
*/

function pangrams(s) {
    // Write your code here
    let arrayOfS = s.replace(/ /g, "").toUpperCase().split("").sort();
    let count = 1;
    
    for (let i = 1; i < arrayOfS.length; i++) {
        if (arrayOfS[i] != arrayOfS[i-1]) {
            count++;
        }
    }
    
    if (count == 26) {
        return "pangram"
    }
    
    return "not pangram"
}

let s = "The quick brown fox jumps over the lazy dog";
let result = pangrams(s);

console.log(result);