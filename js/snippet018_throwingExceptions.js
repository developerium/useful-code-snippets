// js#18 Throwing Exceptions
// Just about any object can be thrown in JS.
// You can later catch them in a try catch block.

throw 'Error2'; // String type
throw 42; // Number type
throw true; // Boolean type
throw { toString: () => "I'm an object!" };

// While it is fairly common to throw numbers or
// strings as errors it is frequently
// more effective to use one of the
// exception types specifically created for
// this purpose
throw new Error('something bad happened!');
throw new EvalError('error in eval()!!');
throw new TypeError(
  'expected a number but got string',
);

// to copy this snippet, go to:
// github.com/developerium/useful-code-snippets
