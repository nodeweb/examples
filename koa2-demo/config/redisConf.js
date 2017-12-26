const Redis = require('ioredis')
const client = new Redis(6379,'127.0.0.1')

module.exports = client