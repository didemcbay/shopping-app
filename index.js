class User {
    constructor(email, password) {
        console.log("Hello", email)
        this.email = email
    }
    set_user(name, address, phone) {
        this.name = name
        this.address = address
        this.phone = phone
    }
}

didem = new User("did@gmail.com", 12789)
didem.set_user("Didem", "blabla", "09876")

class Category {
    constructor(categoryName) {
        this.name = categoryName
        this.subCategories = []
    }
    addcategory(subCategory) {
        this.subCategories.push(subCategory)
    }
}

clothes = new Category("Clothes")
shoes = new Category("Shoes")
electronics = new Category("Electronics")

class SubCategory {
    constructor(subCategoryName) {
        this.name = subCategoryName
        this.products = []
    }
    addproduct(product) {
        this.products.push(product)

    }
}

skirt = new SubCategory("skirt")
dress = new SubCategory("dress")
sport = new SubCategory("sport")
tablet = new SubCategory("tablet")
laptop = new SubCategory("laptop")

class Product {
    constructor(name, brand, price, size) {
        this.name = name
        this.brand = brand
        this.price = price
        this.size = size
        this.discount = 0
    }

}

skirt1 = new Product("Kırmızı Etek", "Gucci", "100$", "M")
sport1 = new Product("Siyah Ayakkabı", "Nike", "99$", "38")
tablet1 = new Product("Ipad Rose", "Apple", "11inch")
laptop1 = new Product("Acer laptop", "Acer", "16inch")

skirt.addproduct(skirt1)
clothes.addcategory(skirt)
sport.addproduct(sport1)
shoes.addcategory(sport)
tablet.addproduct(tablet1)
laptop.addproduct(laptop1)
electronics.addcategory(laptop)
electronics.addcategory(tablet)
