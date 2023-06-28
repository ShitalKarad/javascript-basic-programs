const person = {
    name:'Shital',
    lastName:'Karad',
    age:20,
    hobbies:['reading', 'game' ,'codding'],
    greet: function(){
        console.log("hellow");
    },
    score:{
        math:90,
        science:50

    }
};

console.log( typeof person);
console.log(person.name);
console.log(person.score.math);
console.log(person.hobbies[0]);
person.greet();

console.log("--------------------------");

// program to create JavaScript object using instance of an object

const student = new Object({
    name:'shital',
    lName:'Darade',
    hobbies:['playing', 'cooking','dancing'],
    greet : function(){
        console.log("Welcome");
    },
    score:{
        math:80,
        science :30

    }

});

console.log( typeof student);
console.log(student.name);
console.log(student.score.math);
console.log(student.hobbies[0]);
student.greet();

// program to create JavaScript object using constructor of an object

 class Employee {
    constructor() {
        this.name = 'John',
            this.age = 20,
            this.hobbies = ['reading', 'games', 'coding'],
            this.greet = function () {
                console.log('Hello everyone.');
            },
            this.score = {
                maths: 90,
                science: 80
            };

    }
}

const employee = new Employee();

console.log(typeof employee); // object

// accessing the object value
console.log(employee.name);
console.log(employee.hobbies[0]);
employee.greet();
console.log(employee.score.maths);

//---------------
// object 2
const student2 = {
    gender: 'male'
}

// merge two objects
const newObj = Object.assign(person, student);

console.log(newObj);