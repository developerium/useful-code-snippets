// js#6 Array average
//
// All input values are stored in "nums", then
// the reduce function will sum it up, and in
// the end will be devided by count of items in
// "nums" array.

const average = (...nums) =>
  nums.reduce((acc, val) => acc + val, 0) /
  nums.length;

console.log(average(1, 2, 3)); // 2

// to copy this snippet, go to:
// github.com/developerium/useful-code-snippets
