'use strict';

const express = require('express');
const cors = require('cors');
const app = express();
const languages = require("./routes/languages");
const port = 2222;

const { cartItems } = require('./cart');

app.use(cors());

app.use(express.json());
app.use("/languages", languages);

app.listen(port, () => console.log(`app is up and running on port: ${port}`));

app.get('/', (req, res) => {
    res.json({ data: cartItems });
});

