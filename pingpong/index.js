const express = require('express')
const app = express()
const fs = require('fs')

let counter = 0

app.get('/', function (req, res) {
  counter++
  res.json({count: counter})
})

app.get('/count', function(req,res) {
  res.json({count: counter})
})

app.listen(3001)