$(document).ready(function() {

  //Business Logic
  let outputArray = [];
  let numbers = [];

  function robogersCountUp(input) {
    for (let i = 0; i <= input; i++) {
      numbers.unshift(i);
      numbers = numbers.sort();
    }
    return numbers
  }
console.log(robogersCountUp(5)) 


  function robogersBeep(array) {
    for (const number of numbers){
      for (let i = 0; i < array; i++) {
        if ((array[i]) === 1) {
          outputArray.push("Beep!")
        } else outputArray.push(array)
      }  
    }
  }
console.log(outputArray)




  //User Logic
  $('form').submit(function(submit) {
    submit.preventDefault();
    const input = $('input#userNumber').val();
    const numArray = input.split("");
    const stringArray = numArray.toString();
    console.log(numArray);
    console.log(stringArray);

    function robogers(stringArray) {
      robogersCountdown(stringArray);
      robogersBeep();
      robogersBoop(stringArray);
      robogersNeighbor(stringArray);
    }

    robogers(stringArray);
  })

})