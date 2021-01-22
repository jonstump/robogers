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


  function robogersBeep(numbers) {
    for (const number of numbers){
      for (let i = -1; i < number; i++) {
        if ((number) === 1) {
          outputArray.push("Beep!")
        } else outputArray.push(number)
      }  
    }
  }
console.log(robogersBeep(numbers))




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