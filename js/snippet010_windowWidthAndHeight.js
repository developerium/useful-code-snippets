// js#10 Window width and height info

console.log(window.innerWidth); // width
console.log(window.innerHeight); // height

// will be called whenever window size changes
window.addEventListener('resize', () => {
  // grab changed value here

  console.log(window.innerWidth);
  console.log(window.innerHeight);
});

// to copy this snippet, go to:
// github.com/developerium/useful-code-snippets
