$(document).ready(function() {

  //Business Logic
  var outputArray = [];
  var numbers = [];

  function robogersCountUp(input) {
    for (let i = 0; i <= input; i++) {
      numbers.unshift(i);
    }
    return numbers
  }
console.log(robogersCountUp(15)) 

  const numbersString = numbers.map(function(element) {
    return element.toString();
  });
  numbersString;

function robogersNeighbor(array) {
    for (let i = 0; i < array.length; i++) {
      if (((array[i]).includes('3'))) {
        outputArray.push("Won't you be my neighbor?")
        console.log(outputArray);
      } else {
      (outputArray.push(array[i]))
    } 
  }
}

console.log(robogersCountUp(15))
console.log(robogersNeighbor(numbersString))


  //User Logic
  $('form').submit(function(submit) {
    submit.preventDefault();
    const input = $('input#userNumber').val();
    let numbers = [];

    function robogersCountUp(input) {
      for (let i = 0; i <= input; i++) {
        numbers.unshift(i);
      }
      return numbers
    }

console.log(input())    
    
    
    
    
    
    
    
    
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