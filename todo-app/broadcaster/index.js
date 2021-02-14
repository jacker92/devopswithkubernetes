const axios = require('axios')
const NATS = require('nats')

const nc = NATS.connect({
  url: process.env.NATS_URL
});

nc.subscribe("todos", (msg) => {
  axios.post(process.env.PAYLOAD_URL, {
    user: "bot",
    message: "New todo was created"
  })
  console.log("Todo was added")
});