const { User } = require('./../models');

module.exports.createUser = async (req, res) => {
  const { body } = req;

  try {
    const createdUser = await User.create(body);
    if (!createdUser) {
      return res.status(400).send('Something went wrong');
    }
    res.status(201).send(createdUser);
  } catch (err) {
    res.status(500).send('Server error');
  }
};

module.exports.getAllUsers = async (req, res) => {
  const { pagination } = req;
  try {
    const foundUsers = await User.getAll(pagination);
    res.status(200).send(foundUsers);
  } catch (error) {
    res.status(500).send('Server Error');
  }
};

module.exports.getUsersById = async (req, res) => {
  const { id } = req.params;
  try {
    const foundUser = await User.getById(id);

    if (!foundUser) {
      // TODO createHttpError
      return res.status(404).send('Customer Not Found');
    }

    res.status(200).send(foundUser);
  } catch (err) {
    // TODO next(err)
    res.status(500).send('Server Error');
  }
};

module.exports.updateUsersById = (req, res) => {};

module.exports.deleteUsersById = (req, res) => {};
