const express = require('express');
const config = require('./config');
const Logger = require('./loaders/logger');

async function startServer() {
  const app = express();

  const loaders = require('./loaders');
  await loaders({ expressApp: app });

  app.listen(config.port, err => {
    if (err) {
      Logger.error(err);
      process.exit(1);
    }
    Logger.info(`
      ###########################################################
          ♪ ♪ ♪ 💻 Server listening on port: ${config.port} 💻 ♪ ♪ ♪
      ###########################################################
    `);
  });
}

startServer();
