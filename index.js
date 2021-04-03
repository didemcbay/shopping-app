const SubCategory = require("./models/subCategory")
const Category = require("./models/category")
const CategoryService = require("./services/category-service")
const subCategoryService = require("./services/subcategory-service")

async function main() {
    const clothes = new Category("clothes")
    const shoes = new Category("shoes")
    const skirt = new SubCategory("skirt")
    const dress = new SubCategory("dress")

    clothes.addSubCategory(skirt)
    clothes.addSubCategory(dress)
    clothes.report()

    await CategoryService.add(clothes)
    await CategoryService.add(shoes)

    const categories = await CategoryService.findAll()

    console.log(categories[0].name)

    await CategoryService.del(1)
    const newCategory = await CategoryService.findAll()

    console.log(newCategory[0].name)

}

main()