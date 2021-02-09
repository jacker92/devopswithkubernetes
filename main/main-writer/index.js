import { v4 as uuidv4 } from 'uuid';
import express from 'express'
import fs from 'fs'
import axios from 'axios'

const app = express()
const port = 3000
const value = uuidv4();

app.get('/', async (req, res) => {
  const response = await axios.get('http://pingpong-svc:2346/count')
  res.send(`${process.env.MESSAGE}<br/>
  ${new Date().toISOString()}: ${value}<br/>
  Pings/Pongs: ${response.data.count}`)
})

setInterval(() => {
  console.log(`${new Date().toISOString()}: ${value}`)
  fs.writeFile("/usr/src/app/files/id.txt", value.toString(), err => {
  })
}, 5000)

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})