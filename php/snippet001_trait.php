<?php // #1 traits
// Traits are useful when you really need a
// functionality, but don't want to clutter
// code with inheritance

trait CommonStuff {
    public function commonFunction()
    {
        // write your common function
    }
}

class Post extends Model {
    use CommonStuff;
}

$myPost = new Post();
// you have access to that common function here!
$myPost->commonFunction();

// to copy this snippet, go to:
// github.com/developerium/useful-code-snippets