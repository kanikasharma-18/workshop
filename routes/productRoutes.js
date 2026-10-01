const express = require('express')
const { getProducts } = require('../controllers/productController')

const router = express.Router()

router.get('/products/:id', getProducts)

module.exports = router