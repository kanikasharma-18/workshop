const cache = {}
const cacheTime = 60000

function checkCache(req, res, next) {
    const key = req.originalUrl
    const entry = cache[key]

    if (entry) {
        const age = Date.now() - entry.createdAt

        if (age < cacheTime) {
            res.set('X-Cache', 'HIT')
            return res.json(entry.data)
        }

        delete cache[key]
    }

    res.set('X-Cache', 'MISS')
    next()
}

module.exports = {
    cache,
    checkCache
}