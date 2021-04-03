const BaseService = require("./base-service")
const subCategoryModel = require("../models/subCategory")

class SubcategoryService extends BaseService {
    constructor() {
        super (subCategoryModel,`${__dirname}/../subcategory-database.json`)


    }
}
module.exports = new SubcategoryService()