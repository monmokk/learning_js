function foo(...rest) {
    console.log(rest);
}

foo(1, 2, 3, 4, 5, 6);

function sum(...args) {
    return args.reduce((pre, cur) => pre + cur, 0);
}

console.log(sum(1,2,3,4,5))

const today = new Date('2022/07/04/21:34');
console.log(today.toTimeString());
console.log(today.toLocaleString('ko-KR'))