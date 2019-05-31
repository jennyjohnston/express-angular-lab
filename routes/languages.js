const express = require("express");
const languages = express.Router();

languages.get("/", (req, res) => {
    console.log(req.json);
    res.send();
});

languages.post("/", (req, res) => {
    // console.log(req.body);
    const upperName = req.body.name.toUpperCase();
    res.json({ data: upperName });
});

languages.put("/:id", (req, res) => {
    console.log(req.id, req.body);
    res.send("");
});

languages.delete("/:id", (req, res) => {
    console.log(req.params.id);
    res.send("");
});

module.exports = languages;