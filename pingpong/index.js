const express = require('express')
const { createAndPopulate, increment, getCount } = require('./data')
const app = express()

const createDB = async () => {
  await createAndPopulate()
}

createDB()

app.get('/', async (req, res) => {
  try {
    await getCount()
    res.status(200).end()
  } catch (err) {
    res.status(500).end()
  }
})

app.get('/pingpong', async (req, res) => {
  console.log("In get root")
  await increment()
  const count = await getCount()
  console.log("Got count", count)
  res.status(200).json({ count: count })
})

app.get('/pingpong/count', async (req, res) => {
  const count = await getCount()
  res.status(200).json({ count: count })
})

app.listen(8080)
