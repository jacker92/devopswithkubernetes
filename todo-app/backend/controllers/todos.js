const express = require('express')
const router = express.Router()

let todos = ["Clean kitchen"]

router.get('/', (req, res) => {
    console.log("in get todo")
    res.json({ todos })
})

router.post('/', (req, res) => {
    todos.push(req.body.todo)
    if (req.body.todo) {
        return res.status(201).send()
    }
    return res.status(400).send()
})

module.exports = router