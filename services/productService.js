const database = require('../database/productDatabase')

async function delayReadFile() {
    await new Promise((resolve) => {
        setTimeout(resolve, 1500)
    })
    return await database.readProducts()
}

module.exports = {
    delayReadFile
}