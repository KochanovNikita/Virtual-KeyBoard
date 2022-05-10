import '../sass/key.scss';

const addKeys = (language, caseStyle, currentKeyLine) => {
  const array = [];
  currentKeyLine.forEach(({
    code, ruUpper, enUpper, ru, en,
  }) => {
    let value;
    if (caseStyle) {
      if (language === 'ru') {
        value = ruUpper;
      } else {
        value = enUpper;
      }
    } else if (language === 'ru') {
      value = ru;
    } else {
      value = en;
    }
    const KEY = `
        <button class="key" data-key="${code}">
            ${value}
        </button>
       `;
    array.push(KEY);
  });
  return array.map((x) => x).join('');
};
export default addKeys;
