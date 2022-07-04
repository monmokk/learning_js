function* getDecFunc(){
    yield 1;
}
const genExpFunc = function* () {
    yield 1;
};
const obj = {
    * fenObjMethod(){
        yield 1;
    }
};
class MyClass {
    * genClsMethod() {
        yield 1;
    }
}

function* genFunc() {
    yield 1;
    yield 2;
    yield 3;
}
const generator = genFunc();

console.log(Symbol.iterator in generator);
console.log('next' in generator);

console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());