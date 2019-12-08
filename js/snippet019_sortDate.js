// js#19 Sort array of date strings
// Sort birthday strings ascending by date

const list = [
  '27 June 1971', // elon musk
  '28 October 1955', // bill gates
  '24 February 1955', // steve jobs
  '14 May 1984', // mark zuckerberg
  '12 January 1964', // jeff bezos
];

const sorted = list.sort(
  (a, b) => new Date(a) - new Date(b),
);

console.log(sorted); // sorted ascending

// to copy this snippet, go to:
// github.com/developerium/useful-code-snippets
