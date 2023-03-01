const mysql = require('mysql');
const connection = mysql.createPool({
  host: '127.0.0.1',
  user: 'root',
  password: 'vespapcUniserver',
  database: 'testdb2'
});
module.exports = connection;