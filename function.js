
'use strict';

// Eample 1


function greet(name) {
  console.log("Hello " + name );
}
greet("Peter")

function sayHi(name) {
  console.log("Hi there!" + name);
}

sayHi("Comfort");

function addNumbers(a, b) {
  return a + b;
}

let sum = addNumbers(5, 3);
console.log(sum); 

function double(num) {
  return num * 2;
}

let result = double(5);
console.log(result);

// Function declaration and Expresssion

function nameOfCity(city){
    console.log(city);
}
nameOfCity("calabar");

function logger() {
    console.log('koko');
}
// Call the function
logger();

function sayHello(){
    console.log('Hello Peter')
}
sayHello()

function greet(name) {
  console.log("Hello " + name);
}
greet("Daniel");
greet("Vitus")
greet("Daniel")
greet("Daniel")

function sayHi(){
    console.log('Hi Peter')
}
sayHi()





function getFullName(first, last) {
    return first + " " + last;
}

function greetUser(fullName) {
    console.log("Welcome " + fullName);
}

let name = getFullName("Peter", "Effiong");
greetUser(name);

// Arrow functions

const open =() => {
  console.log ('Hello')
}
open()


function add(a, b){
  return a + b
 }
 console.log(add (3, 7));

 
function getMilk(bottles) {   
  console.log("buy " + bottles ," bottles of Cowbell milk");
}
getMilk(12)

function greet(){
  console.log(' Hello Femi')
}
greet()

function welcomeUser(name){
  console.log("Hi " + name);
}
welcomeUser("Fabian")

function introduce(person){
  console.log("My name is " + person);
}
introduce('Peter')

function calculateTotal( a, b){
  console.log( a + b);
}
calculateTotal( 10,5);

function multiply(c, d){
  return c * d;
}
let total= multiply(15, 2);
console.log(total);

function multiply(a, b){
  return a * b;
}

console.log(multiply(5,5));

function checkAge(age){
  if (age >= 18){
    console.log( 'you are an adult')
  } else{
    console.log('you are a minor')
  }
}

checkAge(15);

function checkAge(age){
  if (age >= 18){
    return 'you are an adult';
  } else {
    return 'you are a minor';
  }
}

console.log(checkAge(22));