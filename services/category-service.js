const BaseService = require("./base-service")
const CategoryModel = require("../models/category")

class CategoryService extends BaseService {
    constructor() {
        super(CategoryModel, `${__dirname}/../category-database.json`);
    }

}
module.exports = new CategoryService()