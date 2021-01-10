const test = require('tape');
const decompose = require('./decompose');

test('decompose', function (t) {
  const res = 'Saevor gret adan thvi ulpan var onyt.';
  t.is(decompose('Sævör grét áðan því úlpan var ónýt.'), res, res);
  t.end();
});

test('decompose', function (t) {
  const res = 'aabcddeefghiijklmnoopqrstuuvwxyyzthaeo';
  t.is(decompose('aábcdðeéfghiíjklmnoópqrstuúvwxyýzþæö'), res, res);
  t.end();
});
