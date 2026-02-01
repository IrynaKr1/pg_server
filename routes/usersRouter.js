const { Router } = require('express');
const { userControllers } = require('./../controllers');
const { validation, pagination } = require('../middleware');
const usersRouter = Router();

usersRouter
  .route('/')
  .post(validation.validateUserOnCreate, userControllers.createUser)
  .get(pagination.paginateUser, userControllers.getAllUsers);

usersRouter
  .route('/:id')
  .get(userControllers.getUsersById)
  .patch(userControllers.updateUsersById)
  .delete(userControllers.deleteUsersById);

// Alternatively, you can define routes separately as shown below:
// usersRouter.get('/:id', (req, res) => {});
// usersRouter.patch('/:id', (req, res) => {});
// usersRouter.delete('/:id', (req, res) => {});

module.exports = usersRouter;
