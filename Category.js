class Category {
    constructor(categoryName) {
        this.name = categoryName
        this.subCategories = []
    }
    addcategory(subCategory) {
        this.subCategories.push(subCategory)
    }
}
module.exports = Category