class Phones {
  static async create ({
    phoneBrand,
    phoneModel,
    phonePrice,
    phoneColor,
    manufacturedYear,
  }) {
    try {
      const insertPhoneQuery = `
        INSERT INTO (brand, model, price, color, manufactured_year)
        VALUES ($1, $2, $3, $4, $5)
        RETURNING *`;

      const values = [
        phoneBrand,
        phoneModel,
        phonePrice,
        phoneColor,
        manufacturedYear,
      ];

      const createdPhones = await Phones.pool.query(insertPhoneQuery, values);
      return createdPhones.rows[0];
    } catch (error) {
      console.log('error', error);
    }
  }
  static async getAllPhones ({ limit, offset }) {
    try {
      const selectQuery = `
        SELECT * FROM phones
        ORDER BY id
        LIMIT $1 OFFSET $2
        `;
      const values = [limit, offset];
      const phones = await Phones.pool.query(selectQuery, values);
      return phones.rows;
    } catch (error) {
      console.log('error', error);
    }
  }

  static async getPhoneById (id) {
    try {
      const selectQuery = `
      SELECT *
      FROM phones
      WHERE id = $1`;
      const phoneById = await Phones.pool.query(selectQuery, id);
      return phoneById.rows[0];
    } catch (error) {
      console.log('error', error);
    }
  }

  static async deletePhoneById (id) {
    try {
      const deleteQuery = `
      DELETE FROM phones
      WHERE id = $1
      RETURNING *`;
      const deletedPhone = await Phones.pool.query(deleteQuery, id);
      return deletedPhone.rows[0];
    } catch (error) {
      console.log('error', error);
    }
  }

  static async updatePhoneById (
    id,
    { brand, model, price, color, manufactured_year }
  ) {
    try {
      const updateQuery = `
    UPDATE phones
    SET brand = $1, model = $2, price = $3, color = $4, manufactured_year = $5
    WHERE id = $6
    RETURNING *`;

      const values = [brand, model, price, color, manufactured_year, id];
      const updatedPhone = await Phones.pool.query(updateQuery, values);

      return updatedPhone.rows[0];
    } catch (error) {
      console.log('error', error);
    }
  }
}

module.exports = Phones;
