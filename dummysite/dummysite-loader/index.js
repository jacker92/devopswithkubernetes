const axios = require('axios')

console.log("In Dummysite loader!")

axios.get(process.env.WEBSITE_URL).then (res => {
    console.log(res.data)
})