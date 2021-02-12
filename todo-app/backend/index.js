const express = require('express')
const bodyParser = require('body-parser')
const todos = require('./controllers/todos')
const path = require('path')
const app = express()
const port = 3001
const download_image = require('./utils')

console.log("Recent version!")

download_image('https://picsum.photos/1200', '1200.jpg')
const appDir = path.dirname(require.main.filename);

app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.status(200).end();
})

app.get('/api/images', (req,res) => {
res.sendFile(path.join(appDir, '1200.jpg'))
})

app.use('/api/todos', todos)

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})
