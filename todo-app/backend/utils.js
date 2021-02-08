const axios = require('axios')
const fs = require('fs')

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

  module.exports = download_image