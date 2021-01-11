const isPlural = require('./isPlural');

const NULL = 'núll';
const TIU = 'tíu';

const num = {
  hvk: [ NULL, 'eitt', 'tvö', 'þrjú', 'fjögur', 'fimm', 'sex', 'sjö', 'átta', 'níu' ],
  kvk: [ NULL, 'ein', 'tvær', 'þrjár', 'fjórar', 'fimm', 'sex', 'sjö', 'átta', 'níu' ],
  kk: [ NULL, 'einn', 'tveir', 'þrír', 'fjórir', 'fimm', 'sex', 'sjö', 'átta', 'níu' ]
};
const tugir_ = [ NULL, TIU, 'tuttugu', 'þrjá' + TIU, 'fjöru' + TIU, 'fimm' + TIU, 'sex' + TIU, 'sjö' + TIU, 'átta' + TIU, 'níu' + TIU ];
const tugir = { hvk: tugir_, kvk: tugir_, kk: tugir_ };
const tjan_ = [ 'tíu', 'ellefu', 'tólf', 'þrettán', 'fjórtán', 'fimmtán', 'sextán', 'sautján', 'átján', 'nítján' ];
const tjan = { hvk: tjan_, kvk: tjan_, kk: tjan_ };

function part (number, gender = 'hvk') {
  const hundrad = Math.floor(number % 1000 / 100);
  const tugur = Math.floor(number % 100 / 10);
  const tala = Math.floor(number % 10);
  // hundrað
  let out = '';
  let og = false;
  if (hundrad) {
    if (hundrad === 1 && number <= 1000) {
      out += 'hundrað';
    }
    else if (hundrad === 1) {
      out += num.hvk[hundrad] + ' hundrað';
    }
    else {
      out += num.hvk[hundrad] + ' hundruð';
    }
  }
  // ellefu ... nítján
  if (tugur === 1 && tala) {
    if (hundrad) {
      out += ' og ';
      og = true;
    }
    out += tjan[gender][tala];
  }
  // 1 ... 99
  else if (tugur || tala) {
    // tugur
    if (tugur) {
      if (hundrad) {
        out += ' ';
        if (!tala) {
          out += 'og ';
          og = true;
        }
      }
      out += tugir[gender][tugur];
    }
    // tala
    if (tala) {
      if (hundrad || tugur) {
        out += ' og ';
        og = true;
      }
      out += num[gender][tala];
    }
  }
  return [ out, og ];
}

function order (number, p, gender, singular, plural) {
  const n = 10 ** (p * 3);
  const i = Math.floor(number / n);
  if (i % 1000 && number >= n) {
    const [ sec ] = part(i, gender);
    return ' ' + sec + ' ' + (isPlural(i) ? plural : singular);
  }
  return '';
}

module.exports = function (number, gender = 'hvk', yearMode = false) {
  if (!(gender in num)) { gender = 'hvk'; }
  if (!isFinite(number)) { return '?'; }

  if (!number) { return NULL; }
  let out = '';

  // integers (up to 1e+22)
  const int = Math.floor(Math.abs(number));

  if (yearMode && int >= 1000 && int <= 2000) {
    // year mode turns only modern era years (1900) into 'nítján hundruð'
    const a = Math.floor(int / 100) % 10;
    out += tjan[gender][a] + ' hundruð';
    if (int % 100) {
      const [ sec ] = part(int % 100, gender);
      out += ' ' + sec;
    }
  }
  else {
    out += order(int, 7, 'kk', 'trilljarður', 'trilljarðar');
    out += order(int, 6, 'kvk', 'trilljón', 'trilljónir');
    out += order(int, 5, 'kk', 'billjarður', 'billjarðar');
    out += order(int, 4, 'kvk', 'billjón', 'billjónir');
    out += order(int, 3, 'kk', 'milljarður', 'milljarðar');
    out += order(int, 2, 'kvk', 'milljón', 'milljónir');
    out += order(int, 1, 'hvk', 'þúsund', 'þúsund');
    if (!int) {
      out += NULL;
    }
    if (int % 1000) {
      const [ sec, og ] = part(int, gender);
      if (int >= 1000) {
        out += ' ';
      }
      if (int > 1000 && !og) {
        out += 'og ';
      }
      out += sec;
    }
  }

  // fractions (up to 3 decimals)
  const frac = Math.abs(number) - int;
  if (frac) {
    const f = frac.toFixed(3)
      .slice(2)
      .replace(/0*$/, '');
    const [ sec ] = part(f, gender);
    out += ' komma ' + sec;
  }

  if (number < 0) {
    return 'mínus ' + out.trim();
  }
  return out.trim();
};
