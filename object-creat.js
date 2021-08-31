//1)using object literal
const student = { name: 'Sakib Al Hasan', job: 'cricket' }
console.log(student);//ans:{ name: 'Sakib Al Hasan', job: 'cricket' }

//2)object constructor
const person = new Object();
// console.log(person);//ans:{}

//3)
const human = Object.create(null);
console.log(human);//ans:[Object: null prototype] {}
const human1 = Object.create(student);
console.log(human1.job); //ans: cricket


//4. CLASS.....CINTICTICAL sugar 
class People {
   constructor(name, age) {
      this.name = name;
      this.age = age;
   }
}

const peop = new People('Manus', 12);
console.log(peop);

//5.Function
function Manus(name) {
   this.name = name;
}
const man = new Manus('Kader');
console.log(man);
