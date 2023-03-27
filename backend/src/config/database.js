const fs = require('fs');
require('dotenv').config()

module.exports = {
  development: {
    username: process.env.APPSETTING_DB_USERNAME,
    password: process.env.APPSETTING_DB_PASSWORD,
    database: process.env.APPSETTING_DB_NAME,
    host: process.env.APPSETTING_DB_HOST,
    port: process.env.APPSETTING_DB_PORT,
    dialect: 'mysql'
  }
};