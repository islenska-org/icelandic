const test = require( 'ava' ).test;
const rhyme = require( '../src/rhymeEncode' );

test( 'rhymeEncode', function ( t ) {
  t.is( rhyme( 'heimkynninu' ), 'h1mkininu', 'heimkynninu' );
  t.is( rhyme( 'skjámyndina' ), 'skjámindina', 'skjámyndina' );
  t.is( rhyme( 'skýrslunni' ), 'skírsluni', 'skýrslunni' );
});

test( 'rhymeEncode with param', function ( t ) {
  t.is( rhyme( 'heimkynninu', 2 ), 'inu', 'heimkynninu' );
  t.is( rhyme( 'skjámyndina', 2 ), 'ina', 'skjámyndina' );
  t.is( rhyme( 'skýrslunni', 2 ), 'uni', 'skýrslunni' );
  t.is( rhyme( 'mannfélagsins', 2 ), 'axins', 'mannfélagsins' );
  t.is( rhyme( 'gullið', 2 ), 'ulið', 'gullið' );
  t.is( rhyme( 'heiðri', 2 ), '1ðri', 'heiðri' );
  t.is( rhyme( 'innt', 2 ), 'int', 'innt' );
  t.is( rhyme( 'vandræðum', 2 ), 'æðum', 'vandræðum' );
  t.is( rhyme( 'viðaukans', 2 ), '2kans', 'viðaukans' );
  t.is( rhyme( 'baujuna', 2 ), 'una', 'baujuna' );
  t.is( rhyme( 'rómverskan', 2 ), 'erskan', 'rómverskan' );
  t.is( rhyme( 'höfuðpauranna', 2 ), 'ana', 'höfuðpauranna' );
  t.is( rhyme( 'frjósömu', 2 ), 'ömu', 'frjósömu' );
  t.is( rhyme( 'stólkolli', 2 ), 'oli', 'stólkolli' );
  t.is( rhyme( 'eldfjalls', 2 ), 'eldfjals', 'eldfjalls' );
  t.is( rhyme( 'hlaupi', 2 ), '2pi', 'hlaupi' );
  t.is( rhyme( 'raðhúsi', 2 ), 'úsi', 'raðhúsi' );
  t.is( rhyme( 'sérkennilegan', 2 ), 'egan', 'sérkennilegan' );
  t.is( rhyme( 'líffræðin', 2 ), 'æðin', 'líffræðin' );
  t.is( rhyme( 'tímasetningin', 2 ), 'ingin', 'tímasetningin' );
  t.is( rhyme( 'áðurnefndra', 2 ), 'efndra', 'áðurnefndra' );
  t.is( rhyme( 'dauðhrætt', 2 ), '2ðhrætt', 'dauðhrætt' );
  t.is( rhyme( 'ritningin', 2 ), 'ingin', 'ritningin' );
  t.is( rhyme( 'samtímamanns', 2 ), 'amans', 'samtímamanns' );
  t.is( rhyme( 'íþyngir', 2 ), 'ingir', 'íþyngir' );
  t.is( rhyme( 'grafískri', 2 ), 'ískri', 'grafískri' );
  t.is( rhyme( 'léni', 2 ), 'éni', 'léni' );
  t.is( rhyme( 'maísmjöl', 2 ), 'ísmjöl', 'maísmjöl' );
  t.is( rhyme( 'útflutningsráðs', 2 ), 'inxráðs', 'útflutningsráðs' );
});

test( 'rhymeEncode compare', function ( t ) {
  t.is( rhyme( 'augljósa', 2 ), rhyme( 'laktósa', 2 ), 'augljósa = laktósa' );
  t.is( rhyme( 'rýma', 2 ), rhyme( 'svíma', 2 ), 'rýma = svíma' );
});


