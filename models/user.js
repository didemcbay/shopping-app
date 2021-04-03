module.exports = class User {
    constructor(email, password,id) {
        console.log("Hello", email)
        this.email = email
        this.password = password
        this.id=id
    }

    set_user(name, address, phone) {
        this.name = name
        this.address = address
        this.phone = phone
    }
    static create({ email, password,id }) {
        return new User(email, password,id)
    }
}

