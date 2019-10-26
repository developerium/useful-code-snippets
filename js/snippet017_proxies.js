// js#17 Proxies
// Introduced in ECMAScript 6, Proxy objects
// allow you to intercept certain operations and
// to implement custom behaviors.

const handler = {
  get: function(target, name) {
    return typeof target[name] !== 'undefined'
      ? target[name]
      : `Please define ${name}`;
  },
};

const person = new Proxy({}, handler);
person.name = 'John';

console.log(person.name); // "John" as expected

// below will not give "undefined", and will
// actually give : "Please define skills"
console.log(person.skills);

// to copy this snippet, go to:
// github.com/developerium/useful-code-snippets
