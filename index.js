const express = require("express")
const categoryRouter = require('./routes/category')
const app = express()
require('./mongo-connection')

app.use(express.json())
app.set('view engine', 'pug')

app.use('/category', categoryRouter)

app.get('/', (req, res) => {
    res.render("index")
})





app.listen(3000, () => console.log("server listening"))