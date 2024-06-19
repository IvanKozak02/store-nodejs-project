const express = require('express');
const {
    getAllProducts,
    getProduct,
    createNewProduct,
    updateProduct,
    deleteProduct
} = require('../controllers/product.controller')

const router = express.Router();


router.route('/')
    .get(getAllProducts)
    .post(createNewProduct)

router.route('/:id')
    .get(getProduct)
    .patch(updateProduct)
    .delete(deleteProduct)


module.exports = {router};

