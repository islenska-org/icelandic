const test = require('tape');
const i18n = require('./i18n');

test('i18n', function (t) {
  t.is(i18n.decimal, ',');
  t.is(i18n.thousands, '.');
  t.is(i18n.days[1], 'Mánudagur');
  t.is(i18n.months[1], 'Febrúar');
  t.end();
});

