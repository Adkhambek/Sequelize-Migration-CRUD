require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT;
const Models = require("./sequelize/models");

Models.sequelize.sync({
    force: true,
    logging: console.log
}).then(function () {
    console.log('Nice! Database looks fine')

}).catch(function (err) {
    console.log(err, "Something went wrong with the Database Update!")
});

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get("/", async (req, res) => {
    res.send("OK");
});

app.listen(PORT, () => console.log("server is working..."));

