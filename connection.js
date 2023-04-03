const mysql = require('mysql2');

const pool = mysql
  .createPool({
    host: 'sql12.freemysqlhosting.net',
    user: 'sql12610458',
    password: 'JZ8nMlmdYr',
    database: 'sql12610458',
    dateStrings: true,
  })
  .promise();

module.exports = pool;
