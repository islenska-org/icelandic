const monthnames = [
  'Janúar', 'Febrúar', 'Mars', 'Apríl',
  'Maí', 'Júní', 'Júlí', 'Ágúst',
  'September', 'Október', 'Nóvember', 'Desember'
];

const daynames = [
  'Sunnudagur', 'Mánudagur', 'Þriðjudagur', 'Miðvikudagur',
  'Fimmtudagur', 'Föstudagur', 'Laugardagur'
];

module.exports = {
  decimal: ',',
  thousands: '.',
  days: daynames,
  shortDays: daynames.map(d => d.slice(0, 3)),
  months: monthnames,
  shortMonths: monthnames.map(d => d.slice(0, 3))
};
