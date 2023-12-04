const Sequelize = require("sequelize");

const sequelize = new Sequelize("node-complete", "root", "poyraZ.9164", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
