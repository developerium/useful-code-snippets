// js#11 New function
// if you want to introduce variables to "eval"
// a string. Be careful this method is
// as DANGEROUS as "eval".

const data = { price: 100, count: 2 };

const expression = 'return row.price * row.count';

// this function gets one input as "row"
const fun = new Function('row', expression);

// data will be passed into function and will be
// available as "row" variable
const value = fun(data);

console.log(value); // => 200

// to copy this snippet, go to:
// github.com/developerium/useful-code-snippets
