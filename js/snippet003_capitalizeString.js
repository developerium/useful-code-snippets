// js#3 Capitalize string function

// new arrow function syntax
const capitalize = ([first, ...rest]) =>
  first.toUpperCase() + rest.join('');

// or go old-school ;)
function capitalize([first, ...rest]) {
  return first.toUpperCase() + rest.join('');
}

const name = capitalize('apple');
// name : Apple

// to copy this snippet, go to:
// github.com/developerium/useful-code-snippets
