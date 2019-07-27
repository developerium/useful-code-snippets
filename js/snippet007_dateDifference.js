// js#7 Difference between 2 dates

const dateFirst = new Date('11/25/2019');
const dateSecond = new Date('11/28/2019');

// time difference
const timeDiff = Math.abs(
  dateSecond.getTime() - dateFirst.getTime(),
);

// days difference
const diffDays = Math.ceil(
  timeDiff / (1000 * 3600 * 24),
);
// diffDays : 3

// to copy this snippet, go to:
// github.com/developerium/useful-code-snippets
