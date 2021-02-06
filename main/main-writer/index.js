import { v4 as uuidv4 } from 'uuid';
import express from 'express'
import fs from 'fs'

const app = express()
const port = 3000
const value = uuidv4();

app.get('/', (req, res) => {
  fs.readFile('/usr/src/app/files/count.txt', (err, data) => {
    res.send(`${new Date().toISOString()}: ${value}
    Pings/Pongs: ${data}`)
  })
})

setInterval(() => {
  console.log(`${new Date().toISOString()}: ${value}`)
  fs.writeFile("/usr/src/app/files/id.txt", value.toString(), err => {
  })
}, 5000)

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})