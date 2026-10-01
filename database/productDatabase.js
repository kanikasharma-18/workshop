const fs = require('fs/promises')
const path = require('path')

const filepath = path.join(__dirname, '..', 'db.json')

async function readProducts() {
    const products = await fs.readFile(filepath, 'utf-8')
    console.log(products)
    return JSON.parse(products)
}
// readProducts()

module.exports = {
    readProducts
}
