const restful = require('node-restful')
const mongoose = restful.mongoose

const categorySchema = new mongoose.Schema({
  name: { type: String, required: true, min: 2},
  description: { type: String,  required: false }
})
module.exports = restful.model('Category', categorySchema)