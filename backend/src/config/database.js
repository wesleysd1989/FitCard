const mongoose = require('mongoose')//importa o framework de comunicacao com mongoDB
const env = require('../../.env')//importa as variaveis de ambiente
mongoose.Promise = global.Promise
mongoose.set('useCreateIndex', true)
const url = process.env.MONGOLAB_URI ? process.env.MONGOLAB_URI : env.stringDB
module.exports = mongoose.connect(url, { useNewUrlParser: true })//export connection DB
//traduzindo as msg de erro para PT-BR
mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório."
mongoose.Error.messages.Number.min = 
    "O '{VALUE}' informado é menor que o limite mínimo de '{MIN}'."