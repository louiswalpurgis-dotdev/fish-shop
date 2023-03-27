const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const process = require("process");
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";
const config = require("../../config/database")[env];
const db = {};

require('dotenv').config()
const custom = {
  host: process.env.APPSETTING_DB_HOST,
  port: process.env.APPSETTING_DB_PORT,
  dialect: 'mysql'
}
let sequelize;
sequelize = new Sequelize(
  process.env.APPSETTING_DB_NAME,
  process.env.APPSETTING_DB_USERNAME,
  process.env.APPSETTING_DB_PASSWORD,
  custom
);

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(
      sequelize,
      Sequelize.DataTypes
    );
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
