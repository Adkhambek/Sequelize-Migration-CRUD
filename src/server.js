require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT;
const { User } = require("./models");
if (process.env.NODE_ENV !== "production") {
    const logger = require("morgan");
    app.use(logger("dev"));
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
    try {
        const users = await User.findAll();
        return res.status(200).json({ users });
    } catch (error) {
        return res.status(400).json({
            message: "something wrong",
        });
    }
});

app.get("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const users = await User.findOne({
            where: { id },
        });
        return res.status(200).json({ users });
    } catch (error) {
        return res.status(400).json({
            message: "something wrong",
        });
    }
});

app.post("/", async (req, res) => {
    try {
        const user = await User.create(req.body);
        return res.status(201).json({ user });
    } catch (error) {
        return res.status(400).json({
            message: "something wrong",
        });
    }
});

app.patch("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const [user] = await User.update(req.body, {
            where: { id },
        });
        if (user) res.status(200).json({ message: "updated successfully" });
        else res.status(400).json({ message: "something wrong" });
    } catch (error) {
        return res.status(400).json({
            message: "something wrong",
        });
    }
});

app.delete("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const deletedUser = await User.destroy({
            where: { id },
        });
        if (deletedUser)
            res.status(204).json({ message: "deleted successfully" });
        else res.status(400).json({ message: "something wrong" });
    } catch (error) {
        return res.status(400).json({
            message: "something wrong",
        });
    }
});

app.listen(PORT, () => console.log("server is working..."));
