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
