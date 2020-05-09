// reactjs#004 Passing callback functions
import React, { useCallback } from 'react';

// Passing a anonymous/new function is bad
// because it forces a render in Foo component
const BadComponent = ({ name }) => (
  <Foo
    onChange={event =>
      console.log(
        `${name}: changed successfully!`,
      )
    }
  />
);

const NotBadComponent = ({ name }) => {
  const changeHandler = event =>
    console.log(`${name}: changed successfully!`);

  return <Foo onChange={changeHandler} />;
};

// This is useful when passing callbacks
// to optimized child components that rely on
// reference equality to prevent
// unnecessary renders (e.g. shouldComponentUpdate)

const GoodComponent = ({ name }) => {
  //
  const changeHandler = useCallback(
    event =>
      console.log(
        `${name}: changed successfully!`,
      ),
    // a list of dependant variables
    [name],
  );

  return <Foo onChange={changeHandler} />;
};
