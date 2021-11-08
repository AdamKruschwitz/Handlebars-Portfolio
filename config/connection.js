//import sequelize
const Sequelize = require('sequelize');

require('dotenv').config();

var sequelize;

//if deployed on heroku
if(process.env.JAWSDB_URL) {
    sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
    //localhost
    sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306
    });
}
//export
module.exports = sequelize;