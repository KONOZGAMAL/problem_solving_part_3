// Short Long Short

/*
Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length,
 but they may be empty ( zero length ).
*/
console.log("_".repeat(20)+"one");
function solution(a, b) {
  if (a.length > b.length) {
    return `${b}${a}${b}`;
  }else if (a.length < b.length){
        return `${a}${b}${a}`
  }
}
console.log(solution("45", "1")); //'1451'
console.log(solution("U", "False")); //'UFalseU'
console.log("_".repeat(20)+"two");

var solution1 = (a, b) => a.length > b.length ? b+a+b : a+b+a;

console.log(solution1("45", "1")); //'1451'
console.log(solution1("U", "False")); //'UFalseU'