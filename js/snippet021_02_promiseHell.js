// js#21 Promise hell
// if we wanted to get all of the values and
// print them at the end, our code could look
// like below:

function printValueHell() {
  // to keep it simple, We'll ignore catching
  // errors of each promise!
  action1().then(value1 => {
    action2().then(value2 => {
      action3().then(value3 => {
        // it will take about 6 seconds
        console.log(
          `result: ${value1} ${value2} ${value3}`,
        );
      });
    });
  });
}

printValueHell();




