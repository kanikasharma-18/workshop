const database = require('../database/productDatabase')

async function delayReadFile() {
    await new Promise((resolve) => {
        setTimeout(resolve, 1500)
    })
    return await database.readProducts()
}

async function addProduct(product) {
    return await database.addProduct(product)
}

async function updateProduct(id, product) {
    return await database.updateProduct(id, product)
}

async function deleteProduct(id) {
    return await database.deleteProduct(id)
}

module.exports = {
    delayReadFile,
    addProduct,
    updateProduct,
    deleteProduct
}