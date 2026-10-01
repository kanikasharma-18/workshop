const fs = require('fs/promises')
const path = require('path')

const filepath = path.join(__dirname, '..', 'db.json')

async function readData() {
    const products = await fs.readFile(filepath, 'utf-8')
    console.log(products)
    return JSON.parse(products)
}

module.exports = readData