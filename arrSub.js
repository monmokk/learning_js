class MyArray extends Array {
    uniq() {
        return this.filter((v, i, self)=> self.indexOf(v) === i);
    }

    average() {
        return this.reduce((pre, cur) => pre + cur, 0) / this.length;
    }
}

const myArr = new MyArray(1, 1, 2, 3);
console.log(myArr);

console.log(myArr.uniq());
console.log(myArr.average());
console.log(myArr.filter(v => v % 2) instanceof MyArray);
console.log(myArr.filter(v => v % 2).uniq().average())