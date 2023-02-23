// Name Shuffler

/*
Write a function that returns a string in which firstname is swapped with last name.
*/
console.log("_".repeat(20)+"one");
function nameShuffler(str){
    let arr = str.split(" ")
    let fin =`${arr[arr.length-1]} ${arr[0]}`
    return   fin
  }
  console.log(nameShuffler('tom jerry'));//'tom jerry'
  console.log(nameShuffler('Mary jeggins'));
  ///////////
  console.log("_".repeat(20)+"two");
  function nameShuffler1(str){
    let arr = str.split(" ").reverse().join(" ")
    return   arr
  }
  console.log(nameShuffler1('tom jerry'));//'tom jerry'
  console.log(nameShuffler1('Mary jeggins'));