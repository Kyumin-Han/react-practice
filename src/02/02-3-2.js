var objectOne = { one: 1, two: 2, other: 0 };
var objectTwo = { three: 3, four: 4, other: -1 };
var combined = {
    // one: objectOne.one,
    // two: objectOne.two,
    // three: objectTwo.three,
    // four: objectTwo.four,
    ...objectOne,
    ...objectTwo,
};
console.log(combined)

var combined = {
    ...objectTwo,
    ...objectOne,
}
console.log(combined)

var { other, ...others } = combined;
// var combined = Object.assign({}, objectOne, objectTwo);
// var combined = Object.assign({}, objectTwo, objectOne);
// var others = Object.assign({}, combined);
// delete others.other; 

console.log(other)
console.log(others)