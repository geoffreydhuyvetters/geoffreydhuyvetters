const fs = require('fs');
const createTable = require('./src/createTable');

fs.writeFile('./dist/index.js', createTable(), err => {
  if (err) console.log(err);
});
