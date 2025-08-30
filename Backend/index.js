require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const port = process.env.PORT || 3000;
const mongoUrl = process.env.MONGO_URL;

const app = express();

app.listen(port, () => {
    console.log("server started");
    mongoose.connect(mongoUrl)
})
