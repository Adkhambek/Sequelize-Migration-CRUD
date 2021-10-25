require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT;

const connectDB = require("./util/database");

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get("/", async (req, res) => {
    res.send("OK");
});

app.listen(PORT, () => console.log("server is working..."));

