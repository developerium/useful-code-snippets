<?php // #3 for loops

// There is a little gotcha in for loop
$list = [1, 1, 1]; // simple array of 3 elements

// a function to see if count is called properly
function myCount($input) {
    echo 'counted!';
    return count($input);
}

// At the end of every loop,
// "count($list)" is called! 3 times here!
for ($i = 0; $i < myCount($list); $i++) {  }

// Instead put the count in initiation section
// now is echoed once!
for ($i = 0, $count = myCount($list);
     $i < $count;
     $i++) { }

// to copy this snippet, go to:
// github.com/developerium/useful-code-snippets
