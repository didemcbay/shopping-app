const { magentaBright } = require('chalk')
const mongoose = require('mongoose')

async function main(){
    await mongoose.connect('mongodb://localhost/dshop', { useUnifiedTopology: true, useNewUrlParser: true })
    console.log('connected')


}

main()