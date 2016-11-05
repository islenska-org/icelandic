const test = require( 'ava' ).test;
const decompose = require( '../src/decompose' );

test( 'decompose', function ( t ) {
  const res = 'Saevor gret adan thvi ulpan var onyt.';
  t.is( decompose( 'Sævör grét áðan því úlpan var ónýt.' ), res, res );
});

test( 'decompose', function ( t ) {
  const res = 'aabcddeefghiijklmnoopqrstuuvwxyyzthaeo';
  t.is( decompose( 'aábcdðeéfghiíjklmnoópqrstuúvwxyýzþæö' ), res, res );
});
