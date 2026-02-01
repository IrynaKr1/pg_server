const express = require('express');
const router = require('./routes');

const app = express();

app.use(express.json());

app.use('/api', router);

module.exports = app;

// POST /users {body}
// GET /users?page=1&results=10
// GET /users/id
// PATCH /users/id {body}
// DELETE /users/id
