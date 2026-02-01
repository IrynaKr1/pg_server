const yup = require('yup');

module.exports.CREATE_USER_VALIDATION_SCHEMA = yup.object({
  first_name: yup.string().trim().min(2).max(32).required(),
  last_name: yup.string().trim().min(2).max(32).required(),
  email: yup.string().email(),
  tel: yup.string().matches(/^\+\d{12}$/, 'Tel must be like +380971234567'),
});
