class User {
  static async create ({ first_name, last_name, email, tel }) {
    try {
      //cформувати запит
      const insertQuery = `
      INSERT INTO users (first_name, last_name, email, tel)
      VALUES ('${first_name}', '${last_name}', '${email}', '${tel}') RETURNING *`;
      // виконати запит
      const createdUsers = await User.pool.query(insertQuery);
      // повернути результат
      return createdUsers.rows[0];
      //якщо помилка
    } catch (error) {
      //console.log('error', error);
      throw new Error(error.detail);
    }
  }
  static async getAll ({ limit, offset }) {
    try {
      // сформувати запит
      const selectAllQuery = `
      SELECT *
      FROM users
      ORDER BY id
      LIMIT ${limit} OFFSET ${offset}`;
      // виконати запит
      const users = await User.pool.query(selectAllQuery);
      // повернути результат
      return users.rows;
      // якщо помилка
    } catch (error) {
      //console.log('error', error);
      throw new Error(error.detail);
    }
  }

  static async getById (id) {
    try {
      const selectQuery = `
      SELECT *
      FROM users
      WHERE id = ${id}`;
      const user = await User.pool.query(selectQuery);
      return user.rows[0];
    } catch (error) {
      console.log('error', error);
    }
  }
  static async updateById (id, { first_name, last_name, email, tel }) {
    try {
      const updateQuery = `
        UPDATE users
        SET first_name = '${first_name}', last_name = '${last_name}', email = '${email}', tel = '${tel}'
        WHERE id = ${id}
        RETURNING *`;
      const updatedUser = await User.pool.query(updateQuery);
      return updatedUser.rows[0];
    } catch (error) {
      console.log('error', error);
    }
  }
  static async deleteById (id) {
    try {
      const deleteQuery = `
        DELETE FROM users
        WHERE id = ${id}
        RETURNING *`;
      const deletedUser = await User.pool.query(deleteQuery);
      return deletedUser.rows[0];
    } catch (error) {
      console.log('error', error);
    }
  }
}

module.exports = User;
