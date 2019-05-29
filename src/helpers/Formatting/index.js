const addVat = (price) => Math.floor(price * 1.2);

const commissionFormatter = {
  format: (value) => {
    return new Intl.NumberFormat('en-GB', {
      style: 'percent',
      minimumFractionDigits: 1,
      maximumFractionDigits: 1
    }).format(value / 100);
  }
};

const stripSpaces = (value) => {
  return value.replace(/\s/g, '');
};

const stripSpecialCharacters = (value) => {
  return value.replace(/[^\w-]/gi, '');
};

const formatCurrency = (value) => {
  return `£${value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
};

const formatPostcode = (value) => {
  const postcode = value.trim();
  if (
    postcode.length === 0 ||
    postcode.length <= 4 ||
    postcode.charAt(postcode.length - 4) === ' '
  )
    return postcode.toUpperCase();

  return postcode
    .replace(/\s/g, '')
    .substr(0, postcode.length - 3)
    .concat(' ')
    .concat(postcode.slice(-3))
    .toUpperCase();
};

const firstPartOfPostcode = (value) => {
  const postcode = formatPostcode(value);
  return postcode.split(' ')[0];
};

const numberFormatter = {
  format: (value, decimalPlaces) => {
    return new Intl.NumberFormat('en-GB', {
      minimumFractionDigits: decimalPlaces,
      maximumFractionDigits: decimalPlaces
    }).format(value);
  }
};

const phoneToInt = (value) => {
  const digitsOnly = value.replace(/\D/g, '');
  const number = parseInt(digitsOnly);

  return number;
};

const formatTestId = (value) => {
  const valueRemovedSpaces = stripSpaces(value);
  const valueRemovedSpecial = stripSpecialCharacters(valueRemovedSpaces);
  const result = valueRemovedSpecial.toLowerCase();
  return result;
};

const padWithEllipsis = (characterLimit, ellipsis) => (
  s
) => {
  if (s.length === characterLimit) return s;

  if (s.length < characterLimit) {
    const diff = characterLimit - s.length;

    if (diff <= ellipsis.length) {
      return s
        .slice(0, characterLimit - ellipsis.length)
        .padEnd(characterLimit, ellipsis);
    }

    return s;
  }

  return s
    .slice(0, characterLimit - ellipsis.length)
    .padEnd(characterLimit, ellipsis);
};

const pluraliseTerm = (term, value) => {
  return value > 1 ? term + 's' : term;
};

const priceFormatter = {
  format: (value) => {
    return new Intl.NumberFormat('en-GB', {
      style: 'currency',
      currency: 'GBP',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value);
  }
};

const capitalize = (value) => {
  return value.charAt(0).toUpperCase() + value.slice(1);
};

const useApostrophe = (value) =>
  value && value[value.length - 1] === 's' ? `${value}'` : `${value}'s`;

export {
  addVat,
  commissionFormatter,
  formatCurrency,
  formatPostcode,
  firstPartOfPostcode,
  formatTestId,
  padWithEllipsis,
  pluraliseTerm,
  priceFormatter,
  useApostrophe,
  stripSpaces,
  stripSpecialCharacters,
  numberFormatter,
  capitalize,
  phoneToInt
};
