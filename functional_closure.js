const counter = (function () {
    let counter = 0;

    return function (aux) {
        counter = aux(counter);
        return counter;
    };
}());

function increase(n) {
    return ++n;
}

function decrease(n) {
    return --n;
}

console.log(counter(increase));
console.log(counter(increase));

// incre_ 와는 별개의 독립된 렉시컬 환경을 갖기 때문에 카운터 상태가 연동되지 않움.
console.log(counter(decrease));
console.log(counter(decrease));
