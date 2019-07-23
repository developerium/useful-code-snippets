// js#5 Array reduce
// The reduce() method executes a
// reducer function (that you provide) on
// each element of the array, resulting in
// a single output value.

const simpleArray = [1, 2, 3, 4];
const sumReducer = (accumulator, currentValue) =>
  accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(simpleArray.reduce(sumReducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(simpleArray.reduce(sumReducer, 5));
// expected output: 15

// to copy this snippet, go to:
// github.com/developerium/useful-code-snippets
