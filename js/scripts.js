$(document).ready(function() {

  //Business Logic
  let outputArray = []

  function robogersCountUp(input) {
    let numbers = [];

    for (let i = 0; i <= input; i++) {
      numbers.unshift(i);
      numbers = numbers.sort();
    }
    return numbers;
  }
console.log(robogersCountUp(5)) 

  function robogersBeep(array) {
    for (let i = 0; i < array.length; i++) {
      if ((array[i]) === "1")
        outputArray.push("Beep!")
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

  function robogersNeighbor(array) {
    for (let i = 0; i < array.length; i++) {
      if ((array[i]) === "3")
        numbers.push("Won't you be my Neighbor!")
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
      robogersCountdown(stringArray);
      robogersBeep(stringArray);
      robogersBoop(stringArray);
      robogersNeighbor(stringArray);
    }

    robogers(stringArray);
  })

})