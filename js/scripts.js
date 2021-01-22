$(document).ready(function() {

  //Business Logic
  let numbers = []

  function robogersBeep(numArray) {
    for (let i = 0; i < array.length; i++) {
      if ((array[i]) === "*1*")
        numbers.push("Beep!")
        console.log(numArray);
        console.log(numbers);
    }
  }

  const narray = ["1", "10", "15"]
  const numArray = narray.split();
  console.log(numArray);

  //User Logic
  $('form').submit(function(submit) {
    submit.preventDefault();
    const input = $('input#userNumber').val();
    const numArray = input.split(" ");
    console.log(numArray);

    function robogers(numArray) {
      robogersBeep(numArray);
      robogersBoop(numArray);
      robogersNeighbor(numArray);
    }

  })

})