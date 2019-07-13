// To get the amount of child components,
// you can use React.Children helper function
import React from 'react';

// note the lowercase children passed in as props
const KidCounter = ({ children }) => (
  <div>{React.Children.count(children)}</div>
);

// used somewhere later in code
// this will output 3
<KidCounter>
  <div>a</div>
  <div>b</div>
  <div>c</div>
</KidCounter>;

// to copy this snippet, go to:
// github.com/developerium/useful-code-snippets
