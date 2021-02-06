const express = require('express')
const app = express()
const port = 3000
const download_image = require('./utils')

download_image('https://picsum.photos/1200', 'public/images/1200.jpg')

app.use(express.static('public'))
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})