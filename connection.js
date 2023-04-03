const mysql = require('mysql2');

const pool = mysql
  .createPool({
    host: 'sql.freedb.tech',
    user: 'freedb_zuhayr',
    password: '3xsbGN*HRrP&e&B',
    database: 'freedb_uniboard',
    dateStrings: true,
  })
  .promise();

module.exports = pool;
