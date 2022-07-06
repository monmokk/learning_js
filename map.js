function solution1(arr1, arr2) {
    return arr1.map((a, i) => a.map((b, j) => b + arr2[i][j]));
}
console.log(solution1([[1,2],[2,3]], [[3,4],[5,6]]))

const kvArray = [{key:1, value:10},
    {key:2, value:20},
    {key:3, value: 30}];

const reformattedArray = kvArray.map(function(obj){
    let rObj = {};
    rObj[obj.key] = obj.value;
    return rObj;
});
console.log(reformattedArray);

function returnInt(element) {
    return parseInt(element, 10);
}
console.log('parseInt 첫번째 인자는 변환 값, 두번째 인자는 진법', ['1', '2', '3'].map(returnInt));
console.log('간단쓰', ['1', '2', '3'].map(str => parseInt(str)));
console.log('더 간단', ['1', '2', '3'].map(Number));

function solution2(x, n) {
    return Array(n).fill(x).map((v, i) => (i + 1) * v)
}
console.log(solution2(2, 5));

function solution3(arr, divisor) {
    let result = arr.filter(num => num % divisor === 0)
    return result.length > 0? result.sort((a, b) => a - b) : [-1];

}
console.log(solution3([5,9,7,10], 5));

const solution4=(participant,completion)=>
    participant.find(name=>!completion[name]--,completion.map(name=>completion[name]=(completion[name]|0)+1));
console.log(solution4(["leo", "kiki", "eden"], ["eden", "kiki"]))