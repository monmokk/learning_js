const Person = (function (){
   let _age = 0;

   function Person(name, age) {
       this.name = name;
       _age = age;
   }

   Person.prototype.sayHi = function () {
       console.log(`Hi I'am ${this.name} and ${_age}`);
   }

   return Person;
}());

const me = new Person('K', 32);
me.sayHi();
console.log(me.name);
// console.log(me._age);