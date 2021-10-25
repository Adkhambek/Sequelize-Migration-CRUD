require("dotenv").config({path: `${process.cwd()}/.env`});
const { Sequelize } = require("sequelize");
const sequelize = new Sequelize(process.env.DB_URL);

const connect = async () => {
    try {
       return sequelize;
    } catch (error) {
        console.error("'Unable to connect to the database:'", error);
    } finally {
        return await sequelize.close();
    }
}

module.exports = connect;