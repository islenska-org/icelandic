const rules = [
  [ 'jé', 'é' ],
  [ 'je', 'é' ],
  [ 'q', 'kú' ],
  [ 'gs', 'x' ],
  [ 'ks', 'x' ],
  [ 'z', 's' ],
  [ 'nn', 'n' ],
  [ 'ggl', 'gl' ],
  [ 'dl', 'l' ],
  [ 'lkt', 'lt' ],
  [ 'll', 'l' ],
  [ 'bl', 'fl' ],
  [ 'ndg', 'gnd' ],
  [ 'ngd', 'gnd' ],
  [ 'rnd', 'rn' ],
  [ 'rdn', 'rn' ],
  [ 'rpt', 'rt' ],
  [ 'kkt', 'kt' ],
  [ 'ýj', 'í' ],
  [ 'ý', 'í' ],
  [ 'y', 'i' ],
  [ 'ji', 'i' ],
  [ 'ij', 'í' ],
  [ 'w', 'v' ],
  [ 'við', 'fið' ],
  [ 'egi', 'eigi' ],
  [ 'ey', '1' ],
  [ 'ei', '1' ],
  [ 'au', '2' ]
];

module.exports = function (word, syll) {
  let w = word.trim().toLowerCase();
  w = w.replace(/[^a-záéíóúðöæþý]/, '');
  rules.forEach(d => {
    w = w.replace(d[0], d[1], 'g');
  });
  // given a number as a secodn argument, retun N last syllables
  if (syll && isFinite(syll)) {
    const b = w.split(/(?=[aáeéiíoóuúyýæö123])/);
    return b.slice(-Math.abs(syll)).join('');
  }
  return w;
};
