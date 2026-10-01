const express = require('express')
const {
	getProducts,
	addProduct,
	updateProduct,
	deleteProduct
} = require('../controllers/productController')
const { checkCache } = require('../middleware/cache')

const router = express.Router()

router.get('/products', checkCache, getProducts)
router.get('/products/:id', checkCache, getProducts)
router.post('/products', addProduct)
router.put('/products/:id', updateProduct)
router.patch('/products/:id', updateProduct)
router.delete('/products/:id', deleteProduct)

module.exports = router