// js#20 Call stack execution order
const somePromise = () =>
  new Promise((resolve, reject) => resolve());

console.log('start main'); // first log

setTimeout(() => {
  console.log('in setTimeout'); // 5th
}, 0);

setImmediate(() => {
  console.log('in setImmediate'); // 6th
});

// a promise will return micro tasks
somePromise().then(() => {
  console.log('after promise'); // 4th
});

// 3rd, this will put in head of callback queue
process.nextTick(() => console.log('nextTick'));

console.log('end main'); // second log
