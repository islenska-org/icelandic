const alphabetIndex = {};
// Icelandic sorts lowercase before uppercase
' -.,0123456789aábcdðeéfghiíjklmnoópqrstuúvwxyýzþæö'
  .split('')
  .forEach((d, i) => {
    alphabetIndex[d] = i + 1;
    if (d.toUpperCase() !== d) {
      alphabetIndex[d.toUpperCase()] = i + 1;
    }
  });

module.exports = function (a, b) {
  // same word? exit early
  const al = a.length;
  const bl = b.length;
  if (al === bl && a === b) {
    return 0;
  }
  // char by char evaluation
  const l = Math.min(al, bl);
  let c = -1;
  while (++c < l) {
    const aV = alphabetIndex[a[c]];
    const bV = alphabetIndex[b[c]];
    // because alphabetIndex has a 1 based index, any falsy value means "undefined" character
    if (!aV || !bV) {
      // either char is not defined: we can JS sort them
      if (a[c] < b[c]) { return -1; }
      return a[c] > b[c] ? 1 : 0;
    }
    else if (aV !== bV) {
      // it's not the same char, go by value
      return aV - bV;
    }
  }
  // words are not identical but didn't sort: this must be the same word but casing is different!
  if (al === bl) {
    if (a > b) { return -1; }
    return a < b ? 1 : 0;
  }
  // words are not identical, so the longer one is the shorter+suffix
  return al - bl;
};
