const express = require('express')
const router = express.Router()
const {addTodo, getTodos} = require('./../db')

router.get('/', async (req, res) => {
    console.log("in get todo")
    const todos = await getTodos()
    console.log("Got response", todos)
    res.json({ todos })
})

router.post('/', (req, res) => {
    if (req.body.todo) {
        addTodo(req.body.todo)
        return res.status(201).send()
    }
    return res.status(400).send()
})

module.exports = router