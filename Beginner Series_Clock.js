// Beginner Series #2 Clock

/*
Clock shows h hours, m minutes and s seconds after midnight.

Your task is to write a function which returns the time since midnight in milliseconds.
*/

function past(h, m, s) {
    let one =  h * 3600000;
    let two =  m * 60000;
    let three = s * 1000;
  return one + two + three;
}

console.log(past(0, 1, 1)); //61000
console.log(past(1, 0, 0)); //3600000
