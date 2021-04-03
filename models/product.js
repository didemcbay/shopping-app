module.exports = class Product {
    constructor(name, brand, price, size, id) {
        this.name = name
        this.brand = brand
        this.price = price
        this.size = size
        this.discount = 0
        this.id = id
    }
    static create({ name, brand, price, size, id }) {
        return new Product(name, brand, price, size, id)
    }
}