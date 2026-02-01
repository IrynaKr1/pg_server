const { Pool } = require('pg');
const User = require('./users');

const connectionOptions = {
  user: 'postgres',
  host: 'localhost',
  database: 'phones_sales',
  password: 'st@rt45',
  port: 5432,
};

const pool = new Pool(connectionOptions);
pool.connect(err => {
  if (!err) {
    console.log('Connected to the database successfully.');
  }
});
process.on('beforeExit', () => pool.end());

User.pool = pool;

module.exports = { User };
