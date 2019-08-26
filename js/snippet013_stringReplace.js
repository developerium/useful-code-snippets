// js#13 Hides all the specified elements.
// Use NodeList.prototype.forEach() to
// apply display: none to each element specified.

const hide = elementList =>
  elementList.forEach(element => {
    element.style.display = 'none';
  });

// Hides all <img> elements on the page
hide(document.querySelectorAll('img'));

// to copy this snippet, go to:
// github.com/developerium/useful-code-snippets
