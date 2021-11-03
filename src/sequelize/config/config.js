require('dotenv').config();
module.exports = {
  development: {
    url: process.env.DB_URL,
    dialect: "postgres",
    native:true,
    ssl: true,
    dialectOptions: {
        ssl: true
    }
  },
  production: {
    url: process.env.DB_URL,
    dialect: "postgres",
    ssl: true,
    dialectOptions: {
        ssl: true
    }
  }
}
