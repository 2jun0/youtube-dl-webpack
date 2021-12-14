'use strict'

process.env['YTDLDWP_to'] = 'youtubedl'

const fs = require('fs')
const path = require('path')
const https = require('https')
const { YOUTUBE_DL_PLATFORM, YOUTUBE_DL_DIR } = require('../src/options')

function downloadFile(fileUrl, filePath) {
  return new Promise(async (resolve, reject) => {
    while (true) {
      let res = await new Promise((resolve, reject) =>
        https.get(fileUrl, httpRes => {
          httpRes.on('error', e => reject(e))
          resolve(httpRes)
        }),
      )

      if (res.headers.location) fileUrl = res.headers.location
      else {
        res.pipe(fs.createWriteStream(filePath))
        res.on('error', e => reject(e))
        res.on('end', () =>
          res.statusCode == 200 ? resolve(res) : reject(res),
        )
        break
      }
    }
  })
}

async function downloadFromWebsite(dirPath, platform) {
  const fileName = platform == 'win32' ? 'youtube-dl.exe' : 'youtube-dl'
  const filePath = dirPath ? path.resolve(dirPath, fileName) : `./${fileName}`
  const fileUrl = `https://youtube-dl.org/downloads/latest/${fileName}`
  return await downloadFile(fileUrl, filePath)
}

downloadFromWebsite(YOUTUBE_DL_DIR, YOUTUBE_DL_PLATFORM)
