function makeCounter(aux) {
    let counter = 0;

    return function () {
        counter = aux(counter);
        return counter;
    };
}

function increase(n) {
    return ++n;
}

function decrease(n) {
    return --n;
}

const increaser = makeCounter(increase);
console.log(increaser());
console.log(increaser());

// incre_ 와는 별개의 독립된 렉시컬 환경을 갖기 때문에 카운터 상태가 연동되지 않움.
const decreaser = makeCounter(decrease);
console.log(decreaser());
console.log(decreaser());
