<?php // #1 If construct

// The construct below tests to see if
// $variable evaluates to any "truthy" value.
// It can be a boolean TRUE, or a non-empty,
// non-NULL value, or non-zero number

if ($variable) {
  // code for when truthy
}

// Below are some sample boolean evaluations
var_dump((bool) "");        // bool(false)
var_dump((bool) 1);         // bool(true)
var_dump((bool) -1);        // bool(true)
var_dump((bool) "foo");     // bool(true)
var_dump((bool) 2.3e5);     // bool(true)
var_dump((bool) array(12)); // bool(true)
var_dump((bool) array());   // bool(false)
var_dump((bool) "false");   // bool(true)

// to copy this snippet, go to:
// github.com/developerium/useful-code-snippets
