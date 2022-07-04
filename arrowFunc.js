window.x = 1;

const normal = function () {
    return this.x;
};

const arrow = () => this.x;

console.log(normal.call({x: 10}))
console.log(arrow.call({x: 10}))

const person = {
    name: 'K',
    sayHi() {
        console.log(`Hi ${this.name}`)
    },
}

class Person {
    constructor() {
        this.name = 'K';
        this.sayHi = () => console.log(`Hi ${this.name}`);
    }
}

class PersonGood {
    name = 'Lee';

    sayHi() {
        console.log(`${this.name}`)
    }
}