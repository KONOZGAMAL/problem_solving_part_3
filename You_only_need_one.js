// You only need one

/*
You will be given an array a and a value x.
 All you need to do is check whether the provided array contains the value.

Array can contain numbers or strings. X can be either.

Return true if the array contains the value, false if not.
*/
console.log("_".repeat(20)+"one");
function check(a, x) {
    if (a.includes(x)) {
        return true
    }
    return false
  }
  console.log(check([66, 101], 66));//true
  console.log(check(['what', 'a', 'great', 'kata'], 'kat'));//true

console.log("_".repeat(20)+"two");

function check2(a, x) {
   return a.indexOf(x)>-1
  }
  console.log(check2([66, 101], 66));//true
  console.log(check2(['what', 'a', 'great', 'kata'], 'kat'));//true
