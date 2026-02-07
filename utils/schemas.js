const yup = require('yup');

module.exports.CREATE_USER_VALIDATION_SCHEMA = yup.object({
  first_name: yup.string().trim().min(2).max(32).required(),
  last_name: yup.string().trim().min(2).max(32).required(),
  email: yup.string().email(),
  tel: yup.string().matches(/^\+\d{12}$/, 'Tel must be like +380971234567'),
});

module.exports.CREATE_PHONE_VALIDATION_SCHEMA = yup.object({
  phoneBrand: yup
    .string()
    .trim()
    .min(2, 'Brand must be at least 2 characters')
    .max(30, 'Brand must not exceed 30 characters')
    .required(),
  phoneModel: yup
    .string()
    .trim()
    .min(2, 'Model must be at least 2 characters')
    .max(50, 'Model must not exceed 50 characters')
    .required(),
  phonePrice: yup
    .number()
    .positive('Price must be a positive number')
    .max(99999.99, 'Price is too high')
    .required(),
  phoneColor: yup
    .string()
    .trim()
    .min(2, 'Color must be at least 2 characters')
    .max(30, 'Color must not exceed 30 characters')
    .required(),
  manufacturedYear: yup
    .number()
    .integer('Year must be an integer')
    .min(1900, 'Year must be at least 1900')
    .max(new Date().getFullYear(), `Year cannot be in the future`)
    .required(),
});
