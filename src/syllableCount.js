// return the number of syllables in an Icelandic word
module.exports = function (word) {
  let s = 0;
  for (let i = 0; i < word.length; i++) {
    const c = word[i];
    if ((c === 'a' && word[i + 1] === 'u') ||
        (c === 'e' && (word[i + 1] === 'i' || word[i + 1] === 'y'))) {
      i++;
      s++;
    }
    else if (c === 'a' || c === 'á' || c === 'e' || c === 'é' ||
             c === 'i' || c === 'í' || c === 'o' || c === 'ó' ||
             c === 'u' || c === 'ú' || c === 'y' || c === 'ý' ||
             c === 'æ' || c === 'ö') {
      s++;
    }
  }
  return s;
};
