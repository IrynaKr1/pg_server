const { Router } = require('express');
const phonesRouter = Router();

phonesRouter
  .route('/')
  .post((req, res) => {})
  .get((req, res) => {});

phonesRouter
  .route('/:id')
  .get((req, res) => {})
  .patch((req, res) => {})
  .delete((req, res) => {});

module.exports = phonesRouter;
