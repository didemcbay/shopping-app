const { create } = require("./user")

module.exports = class SubCategory {
    constructor(subCategoryName, id) {
        this.name = subCategoryName
        this.products = []
        this.id = id
    }
    addproduct(product) {
        this.products.push(product)

    }
    static create({ subCategoryName, id }) {
        return new SubCategory(subCategoryName, id)

    }
}
