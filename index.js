/*
** Simple helper methods for the Icelandic language
*/
module.exports = {
  decompose: require('./src/decompose'),
  alphabetical: require('./src/alphabetical'),
  isPlural: require('./src/isPlural'),
  slugify: require('./src/slugify'),
  numerals: require('./src/numerals'),
  syllableCount: require('./src/syllableCount'),
  rhymeEncode: require('./src/rhymeEncode'),
  i18n: require('./src/i18n')
};
