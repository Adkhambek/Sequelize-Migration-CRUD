const path = require('path');
require("dotenv").config({path: path.join(__dirname, '../.env')});
console.log(process.env.DB_URL);