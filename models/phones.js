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

  static getPhoneById () {}
  static deletePhoneById () {}
  static updatePhoneById () {}
}

module.exports = Phones;
