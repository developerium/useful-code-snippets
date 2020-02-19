// js#21 Promise hell
// Suppose we have 3 functions that will return
// a promise that will resolve into a number
// after specific defined time to emulate an i/o
// or other time consuming operation

// to keep it simple, these promises wont reject
const action1 = () => {
  return new Promise((resolve, reject) =>
    setTimeout(() => resolve(1), 1000),
  );
};

const action2 = () => {
  return new Promise((resolve, reject) =>
    setTimeout(() => resolve(2), 2000),
  );
};

const action3 = () => {
  return new Promise((resolve, reject) =>
    setTimeout(() => resolve(3), 3000),
  );
};
