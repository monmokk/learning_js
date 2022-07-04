function Base1() {

}

class Base2 {

}

let condition = true;

class Derived extends (condition? Base1 : Base2 ){}

const derived = new Derived();
console.log(derived);

console.log(derived instanceof Base1);
console.log(derived instanceof Base2);