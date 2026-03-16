let friends = ['Comfort', 'Able', 'Vitus', 'Michael'];
console.log(friends);

let number = [30, 40, 4, 18,19];
console.log(number);

console.log(friends[0]);
console.log(friends[3]);
console.log(friends.length);

friends [3] = 'Okosin'
console.log(friends); 

const cake =['sugar','butter', 2, 'eggs', 'milk', friends];
console.log(cake);

let color =["Red", "Blue", "Green"];
console.log(color[1]);

let score =[45, 60, 75, 90];
console.log(score [3]);
 // push method,its use to add an element at the
 // end of an array

friends.push('Dantata');
console.log(friends);

//Unshift method,its use to add an element at the
 // beginning of an array
friends.unshift('Ozil');
console.log(friends);

//pop()- Removes the lasrt element
 friends.pop();
 console.log(friends)

 // Shift ()- Removes the first element in the array

 friends.shift();
 console.log(friends)

 // Index- ells you the index (position) of an item inside an array.

 let fruits = ["Apple", "Banana", "Orange"];

console.log(fruits.indexOf("Banana"));

// include-Check if something exists in the array
// includes() simply checks true or false.

let juice = ["Apple", "Banana", "Orange"];

console.log(juice.includes("mango"));