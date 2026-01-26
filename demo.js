/*console.log("hello world")
let age = "30"
console.log(age);
let firstName = "Comfort"
console.log(firstName);
let lastName = "Ekanem"
console.log(lastName);


const y = '2';
console.log(y);
age = 120;
console.log(age);
console.log(firstName + lastName);
console.log(firstName + " " + lastName);
*/

const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.78;

const BMIMark = massMark / (heightMark ** 2);
const BMIJohn = massJohn / (heightJohn * heightJohn)
const markHigherBMI = BMIMark > BMIJohn;
console.log(BMIJohn, BMIJohn)
console.log(markHigherBMI);


if (BMIJohn > BMIMark) {
  console.log("John's BMI is higher than Mark's BMI")
} else {
  console.log("Mark's BMI is higher than John,s BMI")
}
if (BMIMark > BMIJohn) {
  console.log(`Mark's ${BMIMark} is heiger than John's ${BMIJohn}`)
} else {
  console.log(`John's ${BMIJohn} is heiger than Mark's ${BMIJohn}`)
}


/*const firstName= "Daniel Effiong"
const age= 39;
const job= "Developer"
console.log(`I'm ${firstName}, i'm ${age} years old, and i work with meta as a ${job}.`);
*/

/*console.log(`Open to me the gate of holiness, and i will enter and give thanks.
This is the Lord's own gate, where the just may enetr, we bless you.
we bless from the house of the Lord, the Loed God is our light`)
*/


/*let score = 65;

if (score >= 70) {
  console.log("Grade A");
} else if (score >= 60) {
  console.log("Grade B");
} else {
  console.log("Fail");
}
  */

/*const age = 50;

if (age >= 70) {
  console.log(`Retairment and Home rest`);
} else if (age <= 50) {
  console.log(` remain in the ministry`);
} else {
  console.log(`no employment`)
}

const averageScore = 55.5;

if (averageScore < 55.5) {
  console.log("carry over")
} else {
  console.log("pass")

}

const isPrice = 20;

if (isPrice >= 20) {
  console.log("payment successful");
} else {
  console.log('payment denied');
}

let isNumberOfStudent = 45

if (isNumberOfStudent <= 40) {
  console.log('allow access itno the class');
} else if (isNumberOfStudent >= 50) {
  console.log("allow access itno the library");
} else if (isNumberOfStudent >= 45) {
  console.log('allow students to stay in class');
} else {
  console.log('send everyone home');
}

const loginId = "2233";

if (loginId === "2233") {
  console.log('Access granted');
} else {
  console.log('Access denied');
}

let isNumber = 15;
let isValid = true;

if (isNumber >= 10 && isValid) {
  console.log("You can enetr")
} else {
  console.log('do not allow')
}*/

//Here there's no type convertion because "30" is  a string
/*const letPrice = "30";
const letBalance = 15;
console.log("30" + letBalance);
console.log(Number("30"))
*/

const letPrice = "30";
const letBalance = 15;
console.log("30" - letBalance) // the operators -,* and / wiill convert a string to number

// Example with (||) Or
const bg = "black";
if (bg === 'blue' || bg === 'white') {
  console.log('Dark theme')
} else {
  console.log("ligt theme")
}

let hasCash = false;
let hasATMCard = true;

if (hasCash || hasATMCard) {
  console.log("You can pay");
} else {
  console.log("You cannot pay");
}


// with && and ||
let isWeekend = true;
let isHoliday = false;
let hasPermission = true;

if ((isWeekend || isHoliday) && hasPermission) {
  console.log("You can go out");
} else {
  console.log("Stay at home");
}

