$(document).ready(function() {

  //Business Logic
  var outputArray = [];
  var numbers = [];

  //Takes input and creates an array of numbers
  function robogersCountUp(input) {
    for (let i = 0; i <= input; i++) {
      numbers.unshift(i);
    }
    return numbers
  }
  //Turns array of numbers into a string
  const numbersString = numbers.map(function(element) {
    return element.toString();
  });
  numbersString;

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

  console.log(outputArray)

//console.log(robogersCountUp(input))
//console.log(robogersNeighbor(numbersString))


  //User Logic
  $('form').submit(function(submit) {
    submit.preventDefault();
    const input = $('input#userNumber').val();   
    
    //const numArray = input.split("");
    //const stringArray = numArray.toString();
    //console.log(numArray);
    //console.log(stringArray);

    robogersCountUp(input) 
    robogersNeighbor(numbersString);

  })

})