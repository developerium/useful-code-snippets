// js#12 String "replace" function
// Here you can see a function which uses
// built-in method of string, to escape html tags
const escapeHTML = str =>
  str.replace(
    /[&<>'"]/g,
    tag =>
      ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        "'": '&#39;',
        '"': '&quot;',
      }[tag] || tag),
  );

const str = escapeHTML('<a href="#">Hi</a>');
// '&lt;a href=&quot;#&quot;&gt;Hi&lt;/a&gt;'

// to copy this snippet, go to:
// github.com/developerium/useful-code-snippets
