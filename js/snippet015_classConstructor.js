// js#15 Class constructor
// You can pass an object into constructor of
// this class and have its properties set on the
// instance of class

class Model {
  constructor(params) {
    // iterate over every property in "params"
    for (const key in params) {
      this[key] = params[key];
    }
  }
  // add your own methods ...
}

const person = new Model({
  name: 'John',
  experience: 2,
});

console.log(person.name); // John
// to copy this snippet, go to:
// github.com/developerium/useful-code-snippets
