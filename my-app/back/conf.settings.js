const mysql = require('mysql');
const connection = mysql.createConnection({
  host: '', // server adress
  user: '', // user name
  password: '', // password
  database: '' // database name
});

module.exports = connection;