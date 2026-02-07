const { Router } = require('express');
const { phoneControllers } = require('./../controllers');
const { validation, pagination } = require('../middleware');
const phonesRouter = Router();

phonesRouter
  .route('/')
  .post(phoneControllers.createPhone)
  .get(pagination.paginatePhones, phoneControllers.getAllPhones);

phonesRouter
  .route('/:id')
  .get(phoneControllers.getPhoneById)
  .patch((req, res) => {})
  .delete(phoneControllers.deletePhoneById);

module.exports = phonesRouter;
