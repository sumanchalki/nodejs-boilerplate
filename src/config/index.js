const dotenv = require('dotenv');

// Set the NODE_ENV to 'development' by default
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

const envFound = dotenv.config();
if (envFound.error) {
  // This error should crash whole process
  console.warn("⚠️  Couldn't find .env file  ⚠️\nTaking DEV config.");
}

const config = {
  common: {
    port: 3000,
  },
  dev: {
    mongoDB: {
      databaseURL: 'http://dev-url',
    },
    // Used by winston logger
    logs: {
      level: process.env.LOG_LEVEL || 'silly'
    },
    agenda: {
      dbCollection: 'agenda',
      pooltime: '10 seconds',
      concurrency: 10,
    },
    agendash: {
      user: 'agendash',
      password: '123456'
    }
  },
  uat: {
    mongoDB: {
      databaseURL: 'http://uat-url',
    },
    // Used by winston logger
    logs: {
      level: process.env.LOG_LEVEL || 'silly'
    },
    agenda: {
      dbCollection: 'agenda',
      pooltime: '10 seconds',
      concurrency: 10,
    },
    agendash: {
      user: 'agendash',
      password: '123456'
    }
  },
  prod: {
    mongoDB: {
      databaseURL: 'http://prod-url',
    },
    // Used by winston logger
    logs: {
      level: process.env.LOG_LEVEL || 'info'
    },
    agenda: {
      dbCollection: 'agenda',
      pooltime: '10 seconds',
      concurrency: 10,
    },
    agendash: {
      user: 'agendash',
      password: '123456'
    }
  }
}

let finalConfig;

if (process.env.NODE_ENV === 'dev') {
  finalConfig = Object.freeze({ ...config.common, ...config.dev });
}
else if (process.env.NODE_ENV === 'uat') {
  finalConfig = Object.freeze({ ...config.common, ...config.uat });
}
else if (process.env.NODE_ENV === 'prod') {
  finalConfig = Object.freeze({ ...config.common, ...config.prod });
}

module.exports = finalConfig;
