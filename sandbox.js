const { Pool } = require('pg');

const connectionOptions = {
  user: 'postgres',
  host: 'localhost',
  database: 'phones_sales',
  password: 'st@rt45',
  port: 5432,
};

const pool = new Pool(connectionOptions);

// Завершити з'єднання з БД при завершенні роботи застосунку
process.on('beforeExit', () => pool.end());

// Promises
pool
  .query('SELECT CURRENT_DATE')
  .then(res => console.log('Promises res :>>', res.rows[0]))
  .catch(err => console.log('Promises err :>>', err));

// pool
//   .query('SELECT * FROM users')
//   .then(res => console.log('Promises res.rows', res.rows))
//   .catch(err => console.log('err', err));

//calback
pool.query('SELECT CURRENT_DATE', (err, res) => {
  if (!err) {
    console.log('Callback res.rows', res.rows[0]);
  }
});

//Promises async/await - more often!!!!
const id = 2;
(async function () {
  try {
    const res = await pool.query('SELECT CURRENT_DATE');
    console.log('Promises async/await', res.rows[0]);
  } catch (err1) {
    console.log('err1', err1);
  }
})();

// (async () => {
//   try {
//     const user = await pool.query(`SELECT * FROM users WHERE id = $1`, [id]);
//     console.log('user.rows[0', user.rows[0]);
//   } catch (err) {
//     console.log('err', err);
//   }
// })();

// (async () => {
//   try {
//     const user = await pool.query(`SELECT * FROM users WHERE id = ${id}`);
//     console.log('user.rows[0', user.rows[0]);
//   } catch (err) {
//     console.log('err', err);
//   }
// })();

// const fn = 'Petro1';
// const ln = 'Petrenko1';

// (async () => {
//   try {
//     const user = await pool.query(
//       `
//         SELECT *
//         FROM users
//         WHERE first_name = $1 AND last_name = $2`,
//       [fn, ln]
//     );
//     console.log('user.rows[0', user.rows[0]);
//   } catch (err) {
//     console.log('err', err);
//   }
// })();

// Create order for user with id=1
// const user_id = 1;
// const created_at = '2025-10-10';

// (async () => {
//   try {
//     const user = await pool.query(
//       `
//       INSERT INTO orders (user_id, created_at)
//       VALUES ($1, $2) RETURNING *`,
//       [user_id, created_at]
//     );
//     console.log('user.rows[0', user.rows[0]);
//   } catch (err) {
//     console.log('err', err);
//   }
// })();

// POST /users {}
// GET /users?page=1&results=5
// GET /users/1
// PATCH /users/1 {}
//DELETE /users/1

class User {
  static async create ({ first_name, last_name, email, tel }) {
    try {
      //cформувати запит
      const insertQuery = `
      INSERT INTO users (first_name, last_name, email, tel)
      VALUES ('${first_name}', '${last_name}', '${email}', '${tel}') RETURNING *`;
      // виконати запит
      const createdUsers = await pool.query(insertQuery);
      // повернути результат
      return createdUsers.rows[0];
      //якщо помилка
    } catch (error) {
      console.log('error', error);
    }
  }
  static getAll ({ limit, offset }) {}
  static getById (id) {}
  static updateById (id, { first_name, last_name, email, tel }) {}
  static deleteById (id) {}
}

const newCustomer = {
  first_name: 'Test',
  last_name: 'Testowski',
  email: 'email@email.gov',
  tel: '+380981234567',
};

const createdUser = User.create(newCustomer).then(data =>
  console.log('data', data)
);
