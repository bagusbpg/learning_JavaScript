/*
We say that a string contains the word hackerrank if a subsequence of
its characters spell the word hackerrank. Remeber that a subsequence
maintains the order of characters selected from a sequence.
More formally, let p[0], p[1], ..., p[9] be the respective indices of
h, a, c, k, e, r, r, a, n, k in string s. If p[0] < p[1] < ... < p[9]
is true, then s contains hackerrank.
For each query, print YES on a new line if the string contains hackerrank,
otherwise, print NO.

Example
s = haacckkerrannkk
This contains a subsequence of all of the characters in the proper order.
Answer YES
s = haacckkerannk
This is missing the second 'r'. Answer NO.
s = hccaakkerrannkk
There is no 'c' after the first occurrence of an 'a', so answer NO.

Function Description
Complete the hackerrankInString function in the editor below.
hackerrankInString has the following parameter(s):
string s: a string

Returns
string: YES or NO

Input Format
The first line contains an integer q, the number of queries.
Each of the next q lines contains a single query string s.

Constraints
2 <= q <= 10^2
10 <= length of s <= 10^4
*/

function hackerrankInString(s) {
    // Write your code here
    let i = 0;
    let hackerrank = "hackerrank";
    
    for (let j = 0; j < s.length; j++) {        
        if (s.substr(j, 1) == hackerrank.substr(i, 1)) {
            i++;
        } 
    }
    
    if (i >= hackerrank.length) {
        return "YES"
    }
    
    return "NO"
}

let s = "rhbaasdndfsdskgbfefdbrsdfhuyatrjtcrtyytktjjt";
let result = hackerrankInString(s);

console.log(result);