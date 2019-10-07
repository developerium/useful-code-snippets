// js#16 Generators
// Here we make infinite fibonacci sequence
function* fibonacci() {
  let fn1 = 0;
  let fn2 = 1;
  while (true) {
    const current = fn1;
    fn1 = fn2;
    fn2 = current + fn1;
    yield current; // expose this value
  }
}

const sequence = fibonacci();
// with every call to "next" will get next number
console.log(sequence.next().value); // 0
console.log(sequence.next().value); // 1
console.log(sequence.next().value); // 1
console.log(sequence.next().value); // 2
console.log(sequence.next().value); // 3
console.log(sequence.next().value); // 5

// to copy this snippet, go to:
// github.com/developerium/useful-code-snippets
