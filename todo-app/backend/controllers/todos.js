const express = require('express')
const router = express.Router()
const {addTodo, getTodos, updateTodo} = require('./../db')
const NATS = require('nats')

const nc = NATS.connect({url: process.env.NATS_URL});

router.get('/', async (req, res) => {
    console.log("in get todo")
    const todos = await getTodos()
    console.log("Got response", todos)
    res.status(200).json({ todos })
})

router.post('/', (req, res) => {
    if (req.body.todo) {
        nc.publish('todos', "Todo added");
        addTodo(req.body.todo)
        return res.status(201).send()
    }
    return res.status(400).send()
})

router.put('/', async (req,res) => {
    console.log("Updating todo", req.body)
    const response = await updateTodo(req.body.id, req.body.done)
    console.log(response)
    return res.status(200).send()
})

module.exports = router