$(document).ready(function() {

  //Business Logic
  let outputArray = [];
  let numbers = [];
  let numbersString = numbers.map(function(e) {
    return e.toString()
  });

  function robogersCountUp(input) {
    for (let i = 0; i <= input; i++) {
      numbers.unshift(i);
    }
    return numbers
  }
console.log(robogersCountUp(15)) 

  function robogersNeighbor(numbers) {
    const numberToString = number.toString();
    for (const number of numbers){
        if ((numberToString) === "*3*") {
          outputArray.push("Won't you be my neighbor?")
        } else if ((numberToString) !== "*3*") {
          (outputArray.push(number))
        } else {
          break;
        }
      }  
    }
console.log(robogersNeighbor(numbersString))




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