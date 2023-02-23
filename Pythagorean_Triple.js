// Pythagorean Triple

/*
Given an unsorted array of 3 positive integers [ n1, n2, n3 ],
 determine if it is possible to form a Pythagorean Triple using those 3 integers.

A Pythagorean Triple consists of arranging 3 integers, such that:

a2 + b2 = c2
*/
console.log("_".repeat(20)+"one");
function isPythagoreanTriple(integers) {
    integers.sort((e,c)=> e - c)
  let a = Math.pow(integers[0],2);
  let b = Math.pow(integers[1],2);
  let c = Math.pow(integers[2],2);
    if ((a + b) === c) {
      return true;
    }
    return false;
}
console.log(isPythagoreanTriple([3, 5, 9])); //false
console.log(isPythagoreanTriple([3, 4, 5])); //true
console.log(isPythagoreanTriple([72, 78, 30])); //true

/////////////
console.log("_".repeat(20)+"two");

function isPythagoreanTriple(integers) {
    [a,b,c]= integers.sort((e,c)=> e - c)
    return a**2 + b**2 === c**2
}
console.log(isPythagoreanTriple([3, 5, 9])); //false
console.log(isPythagoreanTriple([3, 4, 5])); //true
console.log(isPythagoreanTriple([72, 78, 30])); //true
