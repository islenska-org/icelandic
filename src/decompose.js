// decompose Icelandic special characters to ASCII
const decompose = {
  'á': 'a',
  'ð': 'd',
  'é': 'e',
  'í': 'i',
  'ó': 'o',
  'ú': 'u',
  'ý': 'y',
  'þ': 'th',
  'æ': 'ae',
  'ö': 'o',
  'Á': 'A',
  'Ð': 'D',
  'É': 'E',
  'Í': 'I',
  'Ó': 'O',
  'Ú': 'U',
  'Ý': 'Y',
  'Þ': 'TH',
  'Æ': 'AE',
  'Ö': 'O'
};

const reDecompose = new RegExp( '[' + Object.keys( decompose ).join( '' ) + ']', 'g' );

module.exports = function ( str ) {
  return str.replace( reDecompose, d => decompose[d] );
};
