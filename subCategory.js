class SubCategory {
    constructor(subCategoryName) {
        this.name = subCategoryName
        this.products = []
    }
    addproduct(product) {
        this.products.push(product)

    }
}
module.exports = SubCategory