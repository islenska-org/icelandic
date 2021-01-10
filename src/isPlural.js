// return true if a number takes a plural form
module.exports = function ( n ) {
  return ( n % 10 !== 1 || n % 100 === 11 );
};
