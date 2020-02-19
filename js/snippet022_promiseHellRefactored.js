/* js#21 Promise hell
 By refactoring and using async function,
 the code will look much cleaner, readable
 and maintainable
 But the issue with this version is, we have to
 wait for each promise to resolve to be able to
 start getting next one
 */

async function printValueAsync() {
  const value1 = await action1();
  const value2 = await action2();
  const value3 = await action3();

  // it will also take about 6 seconds
  console.log(
    `result: ${value1} ${value2} ${value3}`,
  );
}

printValueAsync();
