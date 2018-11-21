const { table } = require('table');
const differenceInYears = require('date-fns/difference_in_years');

const data = require('./data.json');

const parseLine = (key, value) => {
  if (key === 'birth_date') {
    const birthDate = new Date(...value.split('/'));
    return ['Age', differenceInYears(Date.now(), birthDate)];
  }
  return [key, value];
};

const createTable = () => {
  const output = [];

  Object.keys(data).forEach(key => {
    const value = data[key];
    output.push(parseLine(key, value));
  });

  return table(output, {
    columns: {
      1: {
        width: 70
      }
    }
  });
};

module.exports = createTable;
