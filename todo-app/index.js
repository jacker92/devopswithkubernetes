const express = require('express')
const app = express()
const port = 3000
const fs = require('fs')
const axios = require('axios')

const download_image = (url, image_path) => {
  console.log("Downloading image")
  axios({
    url,
    responseType: 'stream',
  }).then(
    response =>
      new Promise((resolve, reject) => {
        response.data
          .pipe(fs.createWriteStream(image_path))
          .on('finish', () => resolve())
          .on('error', e => reject(e));
      }),
  );
}

download_image('https://picsum.photos/1200', 'public/images/1200.jpg')

app.use(express.static('public'))
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})