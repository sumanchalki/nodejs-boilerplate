const express = require('express');
// const auth = require('./routes/auth');
// const user = require('./routes/user');

// guaranteed to get dependencies
module.exports = () => {
  const app = express.Router();
  // auth(app);
  // user(app);

  return app;
};
