//Variables and how console.log works
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


const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.78;

const BMIMark = massMark / (heightMark ** 2);
const BMIJohn = massJohn / (heightJohn * heightJohn)
const markHigherBMI = BMIMark > BMIJohn;
console.log(BMIJohn, BMIJohn)
console.log(markHigherBMI);

// If /else statesments
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

// Template literals and knowing how to use Backtics ``
const firstName = "Daniel Effiong"
const age = 39;
const job = "Developer"
console.log(`I'm ${firstName}, i'm ${age} years old, and i work with meta as a ${job}.`);


console.log(`Open to me the gate of holiness, and i will enter and give thanks.
This is the Lord's own gate, where the just may enetr, we bless you.
we bless from the house of the Lord, the Loed God is our light`)


// taking decision(if / else statements) How to use Double if/else

let score = 65;

if (score >= 70) {
  console.log("Grade A");
} else if (score >= 60) {
  console.log("Grade B");
} else {
  console.log("Fail");
}


const age = 50;

if (age >= 70) {
  console.log(`Retairment and Home rest`);
} else if (age <= 50) {
  console.log(` remain in the ministry`);
} else {
  console.log(`no employment`)
}

// If/else statements 
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


// Using upto 3 if/else
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


// if/ else statements with strict equality opereators(===)
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
}

// Type conversion and Coercion
//Here there's no type convertion because "30" is  a string
const letPrice = "30";
const letBalance = 15;
console.log("30" + letBalance);
console.log(Number("30"))


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


  */const hasDriverLicense = true;
  const hasGoodVision = true;
  const isTired = !true;

  if (hasDriverLicense || hasGoodVision || isTired) {
    console.log('let comfort drive')
  } else {
    console.log('comfort should go to a driving school')
  }

  const scoreDolphins = (98 + 108 + 89) / 3;
  const scoreKoalas = (88 + 91 + 110) / 3;

  console.log(scoreDolphins)
  console.log(scoreKoalas)

  if (scoreDolphins > scoreKo+alas) {
    console.log('Dolphins win the trophy')
  } else if (scoreKoalas > scoreDolphins) {
    console.log('Koalas win the trophy')
  } else {
    console.log("Both win the trophy")
  }

  //statement switch: This is another way of writing the if/else statements, though, it allows more conditions or statements to be added to the code

  const day = "Tuesday"

  switch (day) {
    case 'monday':
      console.log('plan a course structure');
      break
    case 'Tuesday':
      console.log('prepare therory videos');
      break
    case 'wednesday':
    case 'thursday':
      console.log('play football');
      break
    case 'friday':
      console.log('Record Videos');
      break
    case 'Saturday':
    case 'sunday':
      console.log('reset and visit family');
      break
    default:
      console.log('Not a good week');
  }
  */

//The conditonal(Ternary) Operator
//this is use to write the if/else statement in a very short way, just a one line of code. it can not be used when
// we have long statements, big logic or many conditions

const age = 23

const drink = age >= 23 ? ' wine' : ' water';
console.log(drink);

const time = 40;
const year = time < 40 ? 'grow' : ' growth';
console.log(year);


const isPrice = 20;
const successful = 'Payment was successful'
const denied = "payment was denied"
if (isPrice >= 20) {
  console.log(successful);
} else {
  console.log(denied);
}

function logger() {
    console.log('my name is peter');
}
function logger() {
  console.log('my name is peter');
}

// Call the function
logger();