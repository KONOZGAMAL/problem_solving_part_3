// Contamination #1 -String

/*
An AI has infected a text with a character!!

This text is now fully mutated to this character.

If the text or the character are empty, return an empty string.
There will never be a case when both are empty as nothing is going on!!

Note: The character is a string of length 1 or an empty string.

*/
console.log("_".repeat(20)+"one");
function contamination(text, char){
    return char.repeat(text.length)
  }
  console.log(contamination("_3ebzgh4","&"));

  /////////////
  console.log("_".repeat(20)+"two");

  function contamination1(text, char){
    if (text === null || text.length === 0) return ""
    let result =""
    for (let i = 0; i <text.length; i++) {
    
      result+=char
    }
    return result
      
  }
  console.log(contamination1("_3ebzgh4","&"));
  console.log(contamination1("","z"));