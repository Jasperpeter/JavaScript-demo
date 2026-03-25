let student= {
    firstName: 'Jasper',
    lastName: "Effiong",
    occupation: 'software engineer'
};
console.log(student);

const Comfort ={
    firstName:'comfort',
    secondName:'Paul',
    thirdName:'Ekanem',
    occupation:'pharmacist',
    stateOfOrigin:'Akwa ibom'
};
console.log(Comfort.occupation);
Comfort.age = 25;
Comfort['siblings'] = ['utibe', 'faith', 'nsikak'];
console.log(Comfort);

//object method

const person = {
  name: "Peter",
  age: 25,
  greet: function () {
    console.log("Hello, my name is " + this.name);
  }
};
person.greet();

const man ={
    name: "Fabian",
    age:25,
    greet () {
        console.log('Hi, my name is ' + this. name +  " and i am " + this.age + "years old" );
    }
}
man.greet();

 const car ={
    brand: "Toyota",
    model: 2014,
    describe() {
        console.log(`This car is a ${this.brand} made in ${this.model}`)
    }
 }
  car.describe();
// example 1
  const user ={
    name: "John",
    age: 25,
    intro() {
        console.log(`My name is ${this.name} and i am ${this.age} years old`);
    }
  }
  user.intro();
// Example 2
  const product = {
    title: "iphone",
    price: 1200,
    show() {
        console.log(`The product is ${this.title} and it cost $${ this.price}`)
    }
  }
  product.show();

  // Example 3

  const stud ={
    name:" Peter",
    course: "Computer Science",
    school() {
        console.log(`${this.name} is studying ${this.course}`);
    }
  }
  stud.school();


  //Exaple 4

  