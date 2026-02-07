const { Router } = require('express');
const { phoneControllers } = require('./../controllers');
const phonesRouter = Router();

phonesRouter
  .route('/')
  .post(phoneControllers.createPhone)
  .get((req, res, nex) => {});

phonesRouter
  .route('/:id')
  .get(phoneControllers.getPhoneById)
  .patch((req, res) => {})
  .delete((req, res) => {});

module.exports = phonesRouter;
