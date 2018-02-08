#!/usr/bin/env node

const Table = require(`cli-table`);
const differenceInYears = require('date-fns/difference_in_years');

const age = differenceInYears(Date.now(), new Date(1984, 11, 1));

const table = new Table();
table.push([`Name`, `Geoffrey Dhuyvetters`]);
table.push([`Age`, age]);
table.push([`Email`, `geoffrey.dhuyvetters@gmail.com`]);
table.push([`Job`, `Software Engineer, madewithlove`]);
table.push([`Linkedin`, `https://www.linkedin.com/in/geoffreydhuyvetters/`]);
table.push([`Twitter`, `https://twitter.com/duivvv`]);
table.push([`Github`, `https://github.com/duivvv`]);

console.log(table.toString());
