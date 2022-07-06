const arr1 = [1, 2, 3, 4];
const sumWithInit = arr1.reduce((acc, cur, _, __) => acc + cur, 0);
console.log(sumWithInit)

const maxCallback = (acc, cur) => Math.max(acc.x, cur.x);
const maxCallback2 = (max, cur) => Math.max(max, cur);

// initialValue 없이 reduce() 오류남
// console.log([ { x: 22 }, { x: 42 } ].reduce( maxCallback ));
// console.log([ { x: 22 }            ].reduce( maxCallback ));
// console.log([                      ].reduce( maxCallback ));


// map/reduce로 개선 - 비었거나 더 큰 배열에서도 동작함
[ { x: 22 }, { x: 42 } ].map( el => el.x )
    .reduce( maxCallback2, -Infinity );

const sum = [{x: 1}, {x:2}, {x:3}].reduce(
    (accumulator, currentValue) => accumulator + currentValue.x, 0);

console.log(sum);

const flattened = [[0, 1], [2, 3], [4, 5]].reduce(
    ( accumulator, currentValue ) => accumulator.concat(currentValue),
    []
);

console.log(flattened)

const names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];

const countedNames = names.reduce(function (allNames, name) {
    if (name in allNames) {
        allNames[name]++;
    }
    else {
        allNames[name] = 1;
    }
    return allNames;
}, {});

console.log(countedNames);

const people = [
    { name: 'Alice', age: 21 },
    { name: 'Max', age: 20 },
    { name: 'Jane', age: 20 }
];

function groupBy(objectArray, property) {
    return objectArray.reduce( (acc, obj) => {
        let key = obj[property];
        if (!acc[key]) {
            acc[key] = [];
        }
        acc[key].push(obj);
        return acc;
    }, {});
}

const groupedPeople = groupBy(people, 'age');

console.log(groupedPeople);

/**
 * @param {array} arr - promise arr
 * @param input
 * @return {Object} promise object
 */
function runPromiseInSequence(arr, input) {
    return arr.reduce(
        (promiseChain, currentFunction) => promiseChain.then(currentFunction),
        Promise.resolve(input)
    );
}

function p1(a) {
    return new Promise((resolve) => {
        resolve(a * 5);
    });
}

function p2(a) {
    return new Promise((resolve) => {
        resolve(a * 2);
    });
}

function f3(a) {
    return a * 3;
}

function p4(a) {
    return new Promise((resolve) => {
        resolve(a * 4);
    });
}

const promiseArr = [p1, p2, f3, p4];
runPromiseInSequence(promiseArr, 10).then(console.log);


const double = x => x + x;
const triple = x => 3 * x;
const quadruple = x => 4 * x;

const pipe = (...functions) => input => functions.reduce(
    (acc, fn) => fn(acc),
    input
);

const multiply6 = pipe(double, triple);
const multiply9 = pipe(triple, triple);
const multiply16 = pipe(quadruple, quadruple);

console.log(multiply6(6));
console.log(multiply9(9));
console.log(multiply16(16));
