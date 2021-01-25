$(document).ready(function() {

  //Business Logic
  const numbers = [];
  const outputArray = [];

  //Takes input and creates an array of numbers
  function robogersCountUp(input) {
    for (let i = 0; i <= input; i++) {
      numbers.push(i);
    }
    return numbers
  }

  //Function that replaces numbers based on digits
  function robogersNeighbor(array) {
    for (let i = 0; i < array.length; i++) {
      if (((array[i]).includes('3'))) {
        outputArray.push("Won't you be my neighbor?") //This if statement replaces any number with a 3 in it with 'Won't you be my neighbor?'
        } else if 
        (((array[i]).includes('2'))) {
        outputArray.push("Boop!")
        //This else if statement replaces any number with the digit 2, and not a 3, with 'Boop!'
        } else if
        (((array[i]).includes('1'))) {
        outputArray.push("Beep!")
        //This else if statement replaces any number with the digit 1, and not a 2 or 3, with 'Beep!'
        } else {
          (outputArray.push(array[i]))
      }
    }
  }


  //User Logic
  $('form').submit(function(submit) {
    $("#result").text();
    submit.preventDefault();
    const input = parseInt($('input#userNumber').val());   
    let numbers = robogersCountUp(input)
    let numbersString = numbers.map(function(element) {
      return element.toString();
    });
    
    var result = robogersNeighbor(numbersString);
    console.log(result);

    $('#result').text(outputArray);
    $("#result").show();
    outputArray.length = 0;
    numbers.length = 0;
    numbersString.length = 0;


  });
});