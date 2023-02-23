// Length of Last Word
/*
Given a string s consisting of words and spaces,
 return the length of the last word in the string.

A word is a maximal 
substring
 consisting of non-space characters only.
*/

var lengthOfLastWord = function(s) {
    let arr =s.trim().split(" ")
     let last= arr[arr.length-1]
    return last.length
};
console.log(lengthOfLastWord("Hello World"));
console.log(lengthOfLastWord("   fly me   to   the moon  "));