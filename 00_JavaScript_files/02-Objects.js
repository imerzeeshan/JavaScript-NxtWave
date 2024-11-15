console.log("Become the programmer you're meant to be!");

let person = {
    name : "zeeshan",
    age : 20,
    "1" : "college",
    "my choice" : "imerzeeshan",
    run : function() {
        console.log("%c Start Running!", "background-color:red; font-size:30px; color: white");
    },
    habits : ["playing Cricket", "Watching Movie"],
    car: {
        name: "Audi",
        model: "A6",
        color: "White"
    }
};
console.log(person);
console.log(person.name);
console.log(person['age']);
console.log(person['my choice']);
console.log(person.gender); //undefined

console.log("--------------------------------------------");

let a = "name";
console.log(person[a]);
console.log(person.a);


console.log("--------------------------------------------");

let {name,age} = person;
console.log(name);
console.log(person.age)
console.log(age);
console.log(person.gender); //undefined

console.log("--------------------modifying Object property------------------------");

person.name = 'shaan';
person[age] = 18;

console.log(person);
console.log(person.name);
console.log(person.age);


person.run();

console.log(person.habits);
console.log(person.habits[0]);
console.log(person.habits[1]);

console.log(person.car);
console.log(person.car.name);
console.log(person.car.model);
