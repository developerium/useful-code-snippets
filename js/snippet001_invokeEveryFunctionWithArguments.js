// Creates a function that invokes each provided
// function with the arguments it receives
// and returns the results.

const over = (...fns) => (...args) =>
  fns.map(fn => fn.apply(null, args));

// example
const minMax = over(Math.min, Math.max);

minMax(5, 3, 1, 4, 2); // [1,5]

// to copy this snippet, go to:
// github.com/developerium/useful-code-snippets
