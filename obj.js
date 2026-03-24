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