const fs = require('fs/promises')
const path = require('path')

const filepath = path.join(__dirname, '..', 'db.json')

async function readProducts() {
    const products = await fs.readFile(filepath, 'utf-8')
    console.log(products)
    return JSON.parse(products)
}

async function saveProducts(products) {
    await fs.writeFile(filepath, JSON.stringify(products, null, 2))
}

async function addProduct(product) {
    const products = await readProducts()
    const newProduct = {
        id: product.id || products.length + 1,
        name: product.name,
        price: product.price
    }

    products.push(newProduct)
    await saveProducts(products)
    return newProduct
}

async function updateProduct(id, product) {
    const products = await readProducts()
    const productIndex = products.findIndex((item) => item.id === Number(id))

    if (productIndex === -1) {
        throw new Error('Product not found')
    }

    products[productIndex] = {
        ...products[productIndex],
        ...product,
        id: Number(id)
    }

    await saveProducts(products)
    return products[productIndex]
}

async function deleteProduct(id) {
    const products = await readProducts()
    const productIndex = products.findIndex((item) => item.id === Number(id))

    if (productIndex === -1) {
        throw new Error('Product not found')
    }

    const deletedProduct = products.splice(productIndex, 1)[0]
    await saveProducts(products)
    return deletedProduct
}

module.exports = {
    readProducts,
    addProduct,
    updateProduct,
    deleteProduct
}
