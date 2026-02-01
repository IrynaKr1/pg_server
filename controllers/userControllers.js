const createHttpError = require('http-errors');
const { User } = require('./../models');

module.exports.createUser = async (req, res, next) => {
  const { body } = req;

  try {
    const createdUser = await User.create(body);
    if (!createdUser) {
      return res.status(400).send('Something went wrong');
    }
    res.status(201).send(createdUser);
  } catch (err) {
    console.log(err);
    next(err);
  }
};

module.exports.getAllUsers = async (req, res, next) => {
  const { pagination } = req;
  try {
    const foundUsers = await User.getAll(pagination);
    res.status(200).send(foundUsers);
  } catch (error) {
    next(err);
  }
};

module.exports.getUsersById = async (req, res) => {
  const { id } = req.params;
  try {
    const foundUser = await User.getById(id);

    if (!foundUser) {
      //return res.status(404).send('Customer Not Found');
      return next(createHttpError(404, 'User Not Found'));
    }

    res.status(200).send(foundUser);
  } catch (err) {
    next(err);
  }
};

module.exports.updateUsersById = async (req, res, next) => {
  const {
    params: { id },
    body,
  } = req;
  try {
    const updatedUser = await User.updateById(id, body);

    if (!updatedUser) {
      return next(createHttpError(404, 'User Not Found'));
    }

    res.status(200).send(updatedUser);
  } catch (err) {
    next(err);
  }
};

module.exports.deleteUsersById = async (req, res, next) => {
  const { id } = req.params;

  try {
    const foundUser = await User.deleteById(id);
    if (!foundUser) {
      return next(createHttpError(404, 'User Not Found'));
    }
    res.status(204).send();
  } catch (err) {
    next(err);
  }
};
