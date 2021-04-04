const express = require("express")
const CategoryService = require("./services/category-service")

const app = express()

app.use(express.json())
app.set('view engine', 'pug')

app.get('/', (req, res) => {
    res.render("index")
})

app.get('/category/all', async (req, res) => {
    const categories = await CategoryService.findAll()
    res.render("category", { categories })

})

app.get('/category/:id', async (req, res) => {
    const id = req.params.id
    const category = await CategoryService.find(id)
    res.send(category)
})

app.post('/category', async (req, res) => {
    const item = await CategoryService.add(req.body)
    res.send(`created item's id: ${item.id}`)

})
app.delete('/category/:id', async (req, res) => {
    await CategoryService.del(req.params.id)
    res.send('ok')
})




app.listen(3000, () => console.log("server listening"))