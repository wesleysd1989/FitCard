
const Category = require('../schema/category')
const errorHandler = require('../common/errorHandler')

Category.methods(['get', 'post', 'put', 'delete'])
Category.updateOptions({ new: true, runValidators: true })
Category.after('post', errorHandler).after('put', errorHandler)

Category.route('count', (req, res, next) => {
    Category.count((error, value) => {
        if (error) {
            res.status(500).json({ errors: [error] })
        } else {
            res.json({ value })
        }
    })
})

module.exports = Category