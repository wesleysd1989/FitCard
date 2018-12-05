
const Company = require('../schema/company')
const errorHandler = require('../common/errorHandler')

Company.methods(['get', 'post', 'put', 'delete'])
Company.updateOptions({ new: true, runValidators: true })
Company.after('post', errorHandler).after('put', errorHandler)

Company.route('count', (req, res, next) => {
    Company.count((error, value) => {
        if (error) {
            res.status(500).json({ errors: [error] })
        } else {
            res.json({ value })
        }
    })
})

module.exports = Company