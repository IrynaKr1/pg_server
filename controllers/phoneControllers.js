const createHttpError = require('http-errors');
const { Phone } = require('./../models');

module.exports.getPhoneById = async (req, res, next) => {
  const { id } = req.params;

  try {
    const foundPhone = await Phone.getPhoneById(id);
    if (!foundPhone) {
      return next(createHttpError(404, 'Phone Not Found'));
    }

    res.status(200).send(foundPhone);
  } catch (error) {
    next(error);
  }
};

module.exports.getAllPhones = async (req, res, next) => {
  const { pagination } = req;
  try {
    const foundPhones = await Phone.getAll(pagination);
    res.status(200).send(foundPhones);
  } catch (err) {
    next(err);
  }
};

module.exports.createPhone = async (req, res, next) => {
  const { body } = req;

  try {
    const createdPhone = await Phone.create(body);
    if (!createdPhone) {
      return res.status(400).send('Something went wrong');
    }
    res.status(201).send(createdPhone);
  } catch (err) {
    next(err);
  }
};
