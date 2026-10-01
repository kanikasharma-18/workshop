const express = require('express')
const { getProducts } = require('../controllers/productController')
const { checkCache } = require('../middleware/cache')

const router = express.Router()

router.get('/products', checkCache, getProducts)
router.get('/products/:id', checkCache, getProducts)

module.exports = router