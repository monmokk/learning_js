class Person {
    #name = '';

    constructor(name) {
        this.#name = name;
    }

    get name() {
        return this.#name.trim();
    }
}
class MyMath {
    static PI = 22/7;
    static #num = 10;

    static increment() {
        return ++MyMath.#num
    }
}
const me = new Person('K');
console.log(me.name)

console.log(MyMath.PI)
console.log(MyMath.increment())