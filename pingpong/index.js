const express = require('express')
const app = express()
const fs = require('fs')

let counter = 0

app.get('/', function (req, res) {
  counter++
  fs.writeFile('/usr/src/app/files/count.txt', counter.toString(), err => {})
  res.json({count: counter})
})

app.listen(3001)