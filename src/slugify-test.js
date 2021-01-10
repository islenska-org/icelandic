const test = require('tape');
const slugify = require('./slugify');

test('slugify', function (t) {
  const res = 'Saevor-gret-adan-thvi-ulpan-var-onyt';
  t.is(slugify('Sævör grét áðan því úlpan var ónýt.'), res, res);
  t.end();
});

test('slugify', function (t) {
  const res = '7an-med-50-thaetti';
  t.is(slugify('7an með 50% þætti'), res, res);
  t.is(slugify('$ 7an með 50% þætti ()'), res, res);
  t.end();
});

