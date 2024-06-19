const CustomApiError = require("../errors/custom-api-error");
const Product = require('../models/product.model');
const getQueryObject = require("../utils/utils");
const Filters = require("../filters/filter");
const getAllProducts = async (req, res) => {
    const reqQuery = req.query;
    const queryObjectFilter = getQueryObject(Product, reqQuery);
    const query = new Filters(Product.find(queryObjectFilter), reqQuery).filter();
    let products = await query;
    return res.status(200).json({products});
}

const getProduct = (req, res) => {
}
const createNewProduct = async (req, res) => {
    const newProduct = await Product.create(req.body)
    return res.status(201).json({msg: 'Product was successfully added'})
}

const updateProduct = (req, res) => {
}

const deleteProduct = (req, res) => {
}

module.exports = {
    getAllProducts,
    getProduct,
    createNewProduct,
    updateProduct,
    deleteProduct
}

