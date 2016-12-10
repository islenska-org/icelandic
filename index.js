/*
** Simple helper methods for the Icelandic language
*/
module.exports = {
  decompose: require( './src/decompose' ),
  alphabetical: require( './src/alphabetical' ),
  isPlural: require( './src/isplural' ),
  slugify: require( './src/slugify' ),
  syllableCount: require( './src/syllableCount' ),
  i18n: require( './src/i18n' )
};
