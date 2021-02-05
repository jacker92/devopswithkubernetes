const express = require('express')
const app = express()

let counter = 0

app.get('/', function (req, res) {
  res.json({count: ++counter})
})

app.listen(3001)