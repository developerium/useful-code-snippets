// reactjs#005 Caching heavy computed values

import React, { useMemo } from 'react';
import { computeExpensiveValue } from 'my-buisness';

// On every render, a heavy and expensive computation
// is done using "a" and "b" variables and
// the result is used

const BadComponent = ({ a, b }) => {
  // This bad because we want to render
  // as fast as possible!
  const value = computeExpensiveValue(a, b);

  return <div>{value}</div>;
};

// The value is computed with "a" and "b", so if neither of
// them change, we need to somehow cache and reuse value

const GoodComponent = ({ a, b }) => {
  const memoizedValue = useMemo(
    () => computeExpensiveValue(a, b),
    // If any of "a" or "b" value changes,
    // it will run above function again
    [a, b],
  );

  return <div>{memoizedValue}</div>;
};
