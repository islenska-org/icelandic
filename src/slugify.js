const decompose = require( './decompose' );

// Create a slug string from Icelandic text
module.exports = function ( str ) {
  return decompose( str.trim() )
          .replace( /[^\w\s-]/g, '' ).trim()
          .replace( /[\-\s]+/g, '-' );
};
