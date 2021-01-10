const test = require('tape');
const isPlural = require('./isplural');

test('isplural', function (t) {
  t.is(isPlural(0), true, '0');
  t.is(isPlural(1), false, '1');
  t.is(isPlural(2), true, '2');
  t.is(isPlural(5), true, '5');
  t.is(isPlural(10), true, '10');
  t.is(isPlural(11), true, '11');
  t.is(isPlural(12), true, '12');
  t.is(isPlural(18), true, '18');
  t.is(isPlural(20), true, '20');
  t.is(isPlural(21), false, '21');
  t.is(isPlural(100), true, '100');
  t.is(isPlural(101), false, '101');
  t.is(isPlural(111), true, '111');
  t.is(isPlural(112), true, '112');
  t.is(isPlural(141), false, '141');
  t.end();
});

