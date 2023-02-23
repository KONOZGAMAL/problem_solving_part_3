// Create a function that accepts a string and a single character,
//  and returns an integer of the count of occurrences the 2nd argument is found in the first one.

// If no occurrences can be found, a count of 0 should be returned.
console.log("_".repeat(20)+"One"+"_".repeat(20));
function strCount(str, letter) {
  let arr = str.split("");
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == letter) {
      count++;
    }
  }
  return count;
}
console.log(strCount("Hello", "l")); //2
console.log(strCount("Hello", "o")); //1
console.log("_".repeat(20)+"Two"+"_".repeat(20));

function strCount1(str, letter) {
    return str.split(letter).length-1
  }

  console.log(strCount1("Hello", "l")); //2
  console.log(strCount1("Hello", "o")); //1