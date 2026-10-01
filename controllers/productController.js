const { delayReadFile } = require('../services/productService')
const { cache } = require('../middleware/cache')

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

module.exports = {
    getProducts
}