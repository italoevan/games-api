;
const { Sequelize } = require("sequelize");

const db = new Sequelize("games","root",process.env.PASSWORD,{
    "host" : "localhost",
    "dialect" : "mysql"
});



module.exports = db;