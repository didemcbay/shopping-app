const mongoose = require('mongoose')

const CategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 3
    }
})

CategorySchema.plugin(require('mongoose-autopopulate'))
const CategoryModel = mongoose.model('Category', CategorySchema)

module.exports = CategoryModel
