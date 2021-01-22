$(document).ready(function() {

  //Business Logic
  let numbers = []

  function robogersBeep(array) {
    for (let i = 0; i < array.length; i++) {
      if ((array[i]) === "1")
        numbers.push("Beep!")
        console.log(numbers);
    }
  }

  function robogersBoop(array) {
    for (let i = 0; i < array.length; i++) {
      if ((array[i]) === "2")
        numbers.push("Boop!")
        console.log(numbers);
    }
  }

  //User Logic
  $('form').submit(function(submit) {
    submit.preventDefault();
    const input = $('input#userNumber').val();
    const numArray = input.split("");
    const stringArray = numArray.toString();
    console.log(numArray);
    console.log(stringArray);

    function robogers(stringArray) {
      robogersBeep(stringArray);
      robogersBoop(stringArray);
      //robogersNeighbor(stringArray);
    }

    robogers(stringArray);
  })

})