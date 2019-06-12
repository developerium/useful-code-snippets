// To avoid render of unnecessary div in DOM,
// when designing components, Use React.Fragment
import React, { Fragment } from 'react';

// pay attention to line 7
const ListItems = () => (
  <Fragment>
    <li>no 1</li>
    <li>no 2</li>
    <li>no 3</li>
  </Fragment>
);

// now on line 19 when <ListItems /> gets
// rendered, only <li> from that component will
// get rendered to DOM
const MyList = () => (
  <ul>
    <ListItems />
  </ul>
);

// to copy this snippet, go to:
// github.com/developerium/useful-code-snippets
