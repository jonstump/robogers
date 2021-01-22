$(document).ready(function() {

  //Business Logic
  let outputArray = [];
  let numbers = [];

  function robogersCountUp(input) {
    for (let i = 0; i <= input; i++) {
      numbers.unshift(i);
    }
    return numbers
  }
console.log(robogersCountUp(15)) 

function robogersBeep(numbers) {
  for (let i = 0; i < array.length; i++) {
    if ((array[i]) === 1) {
      outputArray.push("Beep!")
      console.log(outputArray);
    } else {
    (outputArray.push(array))
    } 
  }
}






  function robogersNeighbor(numbers) {
    for (const array of numbers){
      const number = array[i];
      const numberString = number.toString();
        if ((numberString) === "*3*") {
          outputArray.push("Won't you be my neighbor?")
        } else {
          (outputArray.push(number))
        }
    }
  }
console.log(numberString);
  





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