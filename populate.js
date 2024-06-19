require('dotenv').config();
const Product = require('./models/product.model');
const jsonProducts = require('./products.json');
const connectToDB = require("./db/connection");


const start = async () => {
    try {
        await connectToDB(process.env.MONGO_URI);
        console.log('Success!!!');
        await Product.deleteMany();
        await Product.create(jsonProducts);
        console.log('Data was added successfully!!!');
        process.exit(0);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}

start();

