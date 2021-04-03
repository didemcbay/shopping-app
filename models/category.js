module.exports = class Category {
    constructor(categoryName, subCategories = [], id) {
        this.name = categoryName
        this.subCategories = subCategories
        this.id = id

    }

    addSubCategory(subCategory) {
        this.subCategories.push(subCategory)
    }

    report() {
        this.subCategories.forEach(printSubCategory)

    }

    static create({ name, subCategories, id }) {
        return new Category(name, subCategories, id)
    }

}

const printSubCategory = (subCategory) => console.log(subCategory.name)
