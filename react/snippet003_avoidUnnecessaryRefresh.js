// reactjs#003 avoid unnecessary refresh
import React from 'react';

// Because of how Javascript objects work,
// every time BadComponent renders, BigComponent
// thinks it's getting new defaultConfig
// from props, and a change in props will result
// in a render.
const BadComponent = props => (
  <BigComponent
    {...props}
    defaultConfig={{
      first: true,
      second: false,
      // and some other keys as config
    }}
  />
);

// Using a static variable makes sure that
// the BigComponent will always get the same
// reference to the variable,
// therefore no unnecessary renders!
const defaultParams = {
  first: true,
  second: false,
  // and some other keys as config
};

const GoodComponent = props => (
  <BigComponent
    {...props}
    defaultConfig={defaultParams}
  />
);
