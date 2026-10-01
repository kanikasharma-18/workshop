const { delayReadFile } = require('../services/productService')

async function getProducts(req, res) {
    try {
        const data = await delayReadFile()
        return res.json(data)
    } catch (err) {
        console.log(err)
    }
}

module.exports = {
    getProducts
}