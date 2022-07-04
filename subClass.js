class Base {
    constructor(name) {
        this.name = name;
    }


    sayHi() {
        return `Hi ${this.name}`;
    }
}

class Derived extends Base {
    sayHi() {
        return `${super.sayHi()}`
    }
}

const derived = new Derived('mj');
console.log(derived.sayHi())