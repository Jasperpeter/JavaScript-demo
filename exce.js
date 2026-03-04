// Fuctions.
//Practice 1
/*Create a function called subtractNumbers.
It should take two parameters
It should return the subtraction of the two numbers
Call it and print the result
*/

function subtractNumbers(num1, num2) {
    return num1 - num2;
}
 console.log(subtractNumbers(20, 8))

// practice 2
function isEven(number) {
    if (number % 2 === 0) {
        return "Even";
    }else {
        return "odd"
    }
}
  console.log(isEven(4))

  // Arrow Function
 // Example 1
  const divide =(num3, num4) => {
    return num3 / num4;
  };
   console.log(divide(40,4))

// Example 2
let greetUser = (name) => {
    return "Welcome " + name;
};
 console.log(greetUser("Ferdrick"));

 // Functions calling functions

 function add(a, b){
    return a + b;
 }

  function addAndMultiply(a, b) {
    let sum =add(a, b);
    return sum * 2;
  }
   console.log(addAndMultiply(3, 4));

   // e.g 2
   function greet( name) {
    return "Hello " + name;
   }

   function sayGoodbye(name) {
    let greeting = greet(name);
    return greeting + "  Goodbye"
   }
    console.log(sayGoodbye(' Able'));