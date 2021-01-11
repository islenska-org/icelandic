const test = require('tape');
const numerals = require('./numerals');

test('numerals', function (t) {
  t.is(numerals(0), 'núll');
  t.is(numerals(1), 'eitt');
  t.is(numerals(1, 'hvk'), 'eitt');
  t.is(numerals(1, 'kk'), 'einn');
  t.is(numerals(1, 'kvk'), 'ein');
  t.is(numerals(10), 'tíu');
  t.is(numerals(11), 'ellefu');
  t.is(numerals(15), 'fimmtán');
  t.is(numerals(19), 'nítján');
  t.is(numerals(20), 'tuttugu');
  t.is(numerals(68), 'sextíu og átta');
  t.is(numerals(100), 'hundrað');
  t.is(numerals(111), 'hundrað og ellefu');
  t.is(numerals(211), 'tvö hundruð og ellefu');
  t.is(numerals(900), 'níu hundruð');
  t.is(numerals(909), 'níu hundruð og níu');
  t.is(numerals(990), 'níu hundruð og níutíu');
  t.is(numerals(991), 'níu hundruð níutíu og eitt');
  t.is(numerals(999), 'níu hundruð níutíu og níu');
  t.is(numerals(1000), 'eitt þúsund');
  t.is(numerals(1111), 'eitt þúsund eitt hundrað og ellefu');
  t.is(numerals(5005), 'fimm þúsund og fimm');
  t.is(numerals(5011), 'fimm þúsund og ellefu');
  t.is(numerals(7030), 'sjö þúsund og þrjátíu');
  t.is(numerals(9730), 'níu þúsund sjö hundruð og þrjátíu');
  t.is(numerals(9735), 'níu þúsund sjö hundruð þrjátíu og fimm');
  t.is(numerals(10000), 'tíu þúsund');
  t.is(numerals(16000), 'sextán þúsund');
  t.is(numerals(16001), 'sextán þúsund og eitt');
  t.is(numerals(16100), 'sextán þúsund og eitt hundrað');
  t.is(numerals(100000), 'hundrað þúsund');
  t.is(numerals(835124), 'átta hundruð þrjátíu og fimm þúsund eitt hundrað tuttugu og fjögur');
  t.is(numerals(835124, 'kk'), 'átta hundruð þrjátíu og fimm þúsund eitt hundrað tuttugu og fjórir');
  t.is(numerals(835124, 'kvk'), 'átta hundruð þrjátíu og fimm þúsund eitt hundrað tuttugu og fjórar');
  t.is(numerals(835124, 'hvk'), 'átta hundruð þrjátíu og fimm þúsund eitt hundrað tuttugu og fjögur');
  t.is(numerals(1000000), 'ein milljón');
  t.is(numerals(2000000), 'tvær milljónir');
  t.is(numerals(51000000), 'fimmtíu og ein milljón');
  t.is(numerals(151000000), 'hundrað fimmtíu og ein milljón');
  t.is(numerals(251000000), 'tvö hundruð fimmtíu og ein milljón');
  t.is(numerals(123456789), 'hundrað tuttugu og þrjár milljónir fjögur hundruð fimmtíu og sex þúsund sjö hundruð áttatíu og níu');
  t.is(numerals(13000000000), 'þrettán milljarðar');
  t.is(numerals(13000000007), 'þrettán milljarðar og sjö');

  // fractions
  t.is(numerals(0.1), 'núll komma eitt');
  t.is(numerals(0.1, 'kk'), 'núll komma einn');
  t.is(numerals(0.1), 'núll komma eitt');
  t.is(numerals(24.53, 'kvk'), 'tuttugu og fjórar komma fimmtíu og þrjár');
  t.is(numerals(24.153, 'kvk'), 'tuttugu og fjórar komma hundrað fimmtíu og þrjár');
  t.is(numerals(24.153, 'kk'), 'tuttugu og fjórir komma hundrað fimmtíu og þrír');

  // year mode
  t.is(numerals(1500, 'kk', true), 'fimmtán hundruð');
  t.is(numerals(1549, 'kk', true), 'fimmtán hundruð fjörutíu og níu');
  t.is(numerals(1975, 'kk', true), 'nítján hundruð sjötíu og fimm');

  // negative numbers
  t.is(numerals(-1, 'kk'), 'mínus einn');
  t.is(numerals(-15), 'mínus fimmtán');
  t.is(numerals(-100), 'mínus hundrað');
  t.is(numerals(-1000000), 'mínus ein milljón');

  t.end();
});

