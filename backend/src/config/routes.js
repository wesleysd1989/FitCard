
const express = require('express')
module.exports = function (server) {
    /*
    * Rotas abertas
    */
    const openApi = express.Router()
    server.use('/api', openApi)    
}