const express = require('express');
require('dotenv').config();
require('express-async-errors');
const connectToDB = require('./db/connection');
const notFound = require("./middlewares/not-found.middleware");
const {router: productsRouter} = require('./routes/products.route')
const errorHandler = require("./middlewares/error-handler.middleware");

const app = express();


// MIDDLEWARES
app.use(express.json());

// ROUTES
app.use('/api/v1/products/', productsRouter)


app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 3000;

const start = async () => {
    try {
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

