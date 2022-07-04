// 교집합
Set.prototype.intersection = function (set) {
    return new Set([...this].filter(v => set.has(v)));
}

// 합집합
Set.prototype.union = function (set) {
    return new Set([...this, ...set]);
};

// 차집합
Set.prototype.difference = function (set) {
    return new Set([...this].filter(v => !set.has(v)));
};

// 부분집합인가?
Set.prototype.isSuperset = function (subset) {
    const supersetArr = [...this];
    return [...subset].every(v => supersetArr.includes(v));

};
const setA = new Set([1, 2, 3, 4]);
const setB = new Set([2, 4]);

console.log(setA.intersection(setB));
console.log(setA.union(setB));
console.log(setB.difference(setA))
console.log(setB.isSuperset(setB));