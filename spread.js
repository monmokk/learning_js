console.log(...[1,2,3]);
console.log(...'Hello')
console.log(...new Map([['a', 1], ['b', 2]]));
console.log(...new Set([1, 2, 3]));

const arr = [1, 2, 3, 4, 5];
const max = Math.max(...arr);
console.log(max)

const sum = (...args) => args.reduce((pre, cur) => pre + cur, 0);
console.log(sum(1, 2, 3, 4, 5));