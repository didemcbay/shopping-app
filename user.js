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

module.exports = User