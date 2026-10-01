const readData = require('../database/readData')

async function delayReadFile() {
    await new Promise((resolve) => {
        setTimeout(resolve, 1500)
    })
    return await readData()
}

module.exports = {
    delayReadFile
}