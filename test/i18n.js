const test = require( 'ava' ).test;
const i18n = require( '../src/i18n' );

test( 'i18n', function ( t ) {
  t.is( i18n.decimal, ',' );
  t.is( i18n.thousands, '.' );
  t.is( i18n.days[1], 'Mánudagur' );
  t.is( i18n.months[1], 'Febrúar' );
});

