const express = require('express');
require('dotenv').config();
const app = express();
const connectToDB = require('./db/connection');
const notFound = require("./middlewares/not-found.middleware");

// MIDDLEWARES
app.use(express.json());

//todo routes

app.use(notFound);
const PORT = process.env.PORT || 3000;

const start = async () => {
    try {
        //todo DB connection
        await connectToDB(process.env.MONGO_URI);
        console.log('CONNECTED TO DB...');
        app.listen(PORT, () => {
            console.log(`SERVER IS RUNNING ON PORT ${PORT}...`);
        })
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}

start();

