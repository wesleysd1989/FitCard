
const express = require('express')
module.exports = function (server) {
    /*
    * Rotas abertas
    */
    const openApi = express.Router()
    server.use('/api', openApi)
    const Category = require('../api/services/categoryService')
    Category.register(openApi, '/categories')
}