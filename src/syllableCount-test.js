const test = require('tape');
const syllableCount = require('./syllableCount');

test('syllableCount', function (t) {
  t.is(syllableCount('lögreglumaður'), 5, 'fallegur');
  t.is(syllableCount('fallegur'), 3, 'fallegur');
  t.is(syllableCount('bíómynd'), 3, 'bíómynd');
  t.is(syllableCount('grautur'), 2, 'grautur');
  t.is(syllableCount('eyland'), 2, 'eyland');
  t.is(syllableCount('meyjur'), 2, 'meyjur');
  t.is(syllableCount('nýjan'), 2, 'nýjan');
  t.is(syllableCount('augasteinn'), 3, 'augasteinn');
  t.is(syllableCount('óínáanlegur'), 6, 'óínáanlegur');
  t.is(syllableCount('óætur'), 3, 'óætur');
  t.is(syllableCount('flaututónar'), 4, 'flaututónar');
  t.is(syllableCount('á'), 1, 'á');
  t.is(syllableCount('þá'), 1, 'þá');
  t.is(syllableCount('áð'), 1, 'áð');
  t.is(syllableCount('háð'), 1, 'háð');
  t.is(syllableCount('ei'), 1, 'ei');
  t.is(syllableCount('pfft!'), 0, 'pfft!');
  t.end();
});

