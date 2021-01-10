const test = require('tape');
const alphabetical = require('./alphabetical');

test('alphabetical', function (t) {
  const res = 'auður Auður aurar áður ágúst Ágúst Baldur Æða Æðar';
  const test = 'Auður Æða aurar áður Æðar Ágúst auður Baldur ágúst';
  t.is(test.split(' ').sort(alphabetical)
    .join(' '), res, res);
  t.end();
});

test('alphabetical', function (t) {
  const res = 'aa aaa aaA aAa Aaa aaaa';
  const test = 'aa aaA aaa aAa aaaa Aaa';
  t.is(test.split(' ').sort(alphabetical)
    .join(' '), res, res);
  t.end();
});
