// js#4 Array union
// Returns every unique element that exists in
// any of the two arrays.

// Create a Set with all values of a and b and
// convert to an array.
const union = (a, b) =>
  Array.from(new Set([...a, ...b]));

const list = union([1, 2, 3], [4, 3, 2]);
// list : [1, 2, 3, 4]

// to copy this snippet, go to:
// github.com/developerium/useful-code-snippets
