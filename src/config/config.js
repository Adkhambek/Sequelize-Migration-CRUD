require("dotenv").config();
module.exports = {
    development: {
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: "sequelize",
        host: "127.0.0.1",
        dialect: "postgres",
        logging: false,
    },
    production: {
        url: process.env.DB_URL,
        dialect: "postgres",
        logging: false,
        ssl: true,
        dialectOptions: {
            ssl: true,
        },
    },
};
