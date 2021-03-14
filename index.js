const User = require("./user")
const Category = require("./category")
const SubCategory = require("./subCategory")
const Product = require("./product")
const chalk = require('chalk')
const Database = require("./database")

console.log(chalk.blue('Hello') + ' World' + chalk.red('!'));

const didem = new User("did@gmail.com", 12789)
didem.set_user("Didem", "blabla", "09876")


const clothes = new Category("Clothes")
const shoes = new Category("Shoes")
const electronics = new Category("Electronics")

const skirt1 = new Product("Kırmızı Etek", "Gucci", "100$", "M")
const sport1 = new Product("Siyah Ayakkabı", "Nike", "99$", "38")
const tablet1 = new Product("Ipad Rose", "Apple", "11inch")
const laptop1 = new Product("Acer laptop", "Acer", "16inch")

const skirt = new SubCategory("skirt")
const dress = new SubCategory("dress")
const sport = new SubCategory("sport")
const tablet = new SubCategory("tablet")
const laptop = new SubCategory("laptop")

skirt.addproduct(skirt1)
clothes.addcategory(skirt)
sport.addproduct(sport1)
shoes.addcategory(sport)
tablet.addproduct(tablet1)
laptop.addproduct(laptop1)
electronics.addcategory(laptop)
electronics.addcategory(tablet)

Database.save("clothes.json", clothes)
Database.save("electronics.json", electronics)
Database.save("shoes.json", shoes)
const loadedFile = Database.load("clothes.json")
console.log(loadedFile.name)
