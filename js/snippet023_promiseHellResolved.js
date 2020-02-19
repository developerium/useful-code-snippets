/* js#21 Promise hell
 Now all of the functions will be run
 simultaneously which means all 3 promises are
 kicked-in together. We will get the result once
 all of the promises are resolved
 */

async function printValueParallel() {
  // Awaiting Promise.all will give back an array
  // of the resolved values
  // by the order which they went in
  const [val1, val2, val3] = await Promise.all([
    action1(),
    action2(),
    action3(),
  ]);

  // Will only take about 3 seconds to get
  // all values instead of 6!
  console.log(`result: ${val1} ${val2} ${val3}`);
}

printValueParallel();
