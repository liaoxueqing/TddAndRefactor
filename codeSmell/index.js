import plays from './plays.json' assert {type: 'json'};

import invoices from './invoices.json' assert {type: 'json'};

import statement from './statement.js';

console.log("================")
console.log(statement(invoices[0], plays))
console.log("================")