const express = require('express')
const router = express.Router()
const CategoryService = require('../services/category-service')

router.get('/all', async (req, res) => {
    const categories = await CategoryService.findAll()
    console.log("categories: ", categories)
    res.render("category", { categories })
})
router.get('/:id', async (req, res) => {
    const id = req.params.id
    const category = await CategoryService.find(id)
    res.send(category)
})

router.post('/', async (req, res) => {
    const item = await CategoryService.add(req.body)
    res.send(`created item's id: ${item.id}`)

})
router.delete('/:id', async (req, res) => {
    await CategoryService.del(req.params.id)
    res.send('ok')
})
router.post('/:id/subs', async (req, res) => {
    res.send('OK')
})

module.exports = router