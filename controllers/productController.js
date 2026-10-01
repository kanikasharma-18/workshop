const {
    delayReadFile,
    addProduct: addProductToDatabase,
    updateProduct: updateProductInDatabase,
    deleteProduct: deleteProductFromDatabase
} = require('../services/productService')
const { cache, clearCache } = require('../middleware/cache')

async function getProducts(req, res) {
    try {
        const data = await delayReadFile()
        cache[req.originalUrl] = {
            data,
            createdAt: Date.now()
        }
        return res.json(data)
    } catch (err) {
        console.log(err)
    }
}

async function addProduct(req, res) {
    try {
        const product = await addProductToDatabase(req.body)
        clearCache()
        return res.status(201).json(product)
    } catch (err) {
        return res.status(500).json({ error: err.message })
    }
}

async function updateProduct(req, res) {
    try {
        const product = await updateProductInDatabase(req.params.id, req.body)
        clearCache(req.params.id)
        return res.json(product)
    } catch (err) {
        return res.status(500).json({ error: err.message })
    }
}

async function deleteProduct(req, res) {
    try {
        const product = await deleteProductFromDatabase(req.params.id)
        clearCache(req.params.id)
        return res.json(product)
    } catch (err) {
        return res.status(500).json({ error: err.message })
    }
}

module.exports = {
    getProducts,
    addProduct,
    updateProduct,
    deleteProduct
}