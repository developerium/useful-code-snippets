// js#8 Json parse modifier
// You can pass a function to "JSON.parse"
// to alter the result

const string = '{"1": "A", "2": "B", "3": "I"}';

const heroModifier = (key, value) => {
  if (value === 'A') return 'Aquaman';

  if (value === 'B') return 'Batman';

  if (value === 'I') return 'Ironman';

  return value;
};

const heroData = JSON.parse(string, heroModifier);

console.log(heroData);
// {1: "Aquaman", 2: "Batman", 3: "Ironman"}

// to copy this snippet, go to:
// github.com/developerium/useful-code-snippets
