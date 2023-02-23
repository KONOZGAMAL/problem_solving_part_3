//Is the string uppercase?
/*
Is the string uppercase?
Task
Create a method to see whether the string is ALL CAPS.
*/
console.log("_".repeat(20)+"one");

String.prototype.isUpperCase = function () {
 return this == this.toUpperCase()
};
// let str = "hello I AM DONALD";
let str="ACSKLDFJSGSKLDFJSKLDFJ"
console.log(str.isUpperCase());
////////////////
console.log("_".repeat(20)+"two");
String.prototype.isUpperCase1 = function () {
 return !/[a-z]/.test(this)
};
let str1 = "hello I AM DONALD";
// let str1="ACSKLDFJSGSKLDFJSKLDFJ"
console.log(str1.isUpperCase1());

////////////
console.log("_".repeat(20)+"three");
String.prototype.isUpperCase3 = function () {
    return this.split("").every((e) => (e == e.toUpperCase() ? true : false));
};
// let str2 = "hello I AM DONALD";
let str2="ACSKLDFJSGSKLDFJSKLDFJ"
console.log(str1.isUpperCase3());

//////////
console.log("_".repeat(20)+"four");

String.prototype.isUpperCase4 = function () {
  let str =this.split("")
 for (let i = 0; i <str.length; i++) {
    if (str[i] == str[i].toLowerCase()) {
      return false
    }
    return true

 }
}
// let str3="ACSKLDFJSGSKLDFJSKLDFJ"
let str3 = "hello I AM DONALD";
console.log(str3.isUpperCase4());