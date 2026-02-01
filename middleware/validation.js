const { CREATE_USER_VALIDATION_SCHEMA } = require('../utils/schemas');

module.exports.validateUserOnCreate = async (req, res, next) => {
  const { body } = req;
  try {
    const validateUser = await CREATE_USER_VALIDATION_SCHEMA.validate(body);
    req.body = validateUser;
    next();
  } catch (error) {
    // TODO next(e)
    res.status(422).send('Validation Error');
  }
};
