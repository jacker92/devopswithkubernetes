const express = require('express')
const bodyParser = require('body-parser')
const todos = require('./controllers/todos')
const path = require('path')
const app = express()
const port = 3001
const download_image = require('./utils')

download_image('https://picsum.photos/1200', '1200.jpg')
const appDir = path.dirname(require.main.filename);

app.use(bodyParser.json())

app.get('/images', (req,res) => {
res.sendFile(path.join(appDir, '1200.jpg'))
})

app.use('/todos', todos)

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})