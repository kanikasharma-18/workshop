const { delayReadFile } = require('../services/productService')

const cache = {}

async function getProducts(req, res) {
    const key = req.url
    const value = cache[key]

    try {
        if (value) {
            return res.json(value)
        }

        const data = await delayReadFile()
        cache[key] = data
        return res.json(data)
    } catch (err) {
        console.log(err)
    }
}

module.exports = {
    getProducts
}