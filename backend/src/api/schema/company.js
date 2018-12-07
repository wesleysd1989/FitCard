const restful = require('node-restful')
const mongoose = restful.mongoose

const companySchema = new mongoose.Schema({
  socialName: { type: String, required: true, min: 2},
  fantasyName: { type: String, required: false},
  cnpj: { type: String,  required: true },
  email: { type: String,  required: false },
  address: { type: String,  required: false },
  city: { type: String,  required: false },
  province: { type: String,  required: false},
  telephone: { type: String,  required: false },
  registerDate: { type: String,  required: false },
  status: { type: Boolean,  required: true},
  agency: { type: String,  required: false },
  account: { type: String,  required: false },
  category: { type: String,  required: false }
})
module.exports = restful.model('Company', companySchema)