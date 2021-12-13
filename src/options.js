// The MIT License (MIT)
// Copyright © 2021 2jun0, microlink.io hello@microlink.io (microlink.io)
// This code is modified to the repo https://github.com/microlinkhq/youtube-dl-exec
'use strict'

const os = require('os')
const path = require('path')

function get(key) {
  if (!key) return undefined
  return (
    process.env[key] ||
    process.env[`YTDLDWP_${key.toLowerCase()}`] ||
    process.env[`YTDLDWP_${key.toUpperCase()}`]
  )
}

const YOUTUBE_DL_DIR = get('to')

const YOUTUBE_DL_PLATFORM =
  get('platform') || os.type() === 'Windows_NT' ? 'win32' : 'unix'

const YOUTUBE_DL_FILE =
  YOUTUBE_DL_PLATFORM === 'win32' ? 'youtube-dl.exe' : 'youtube-dl'

const YOUTUBE_DL_PATH = path.join(YOUTUBE_DL_DIR, YOUTUBE_DL_FILE)

module.exports = {
  YOUTUBE_DL_DIR,
  YOUTUBE_DL_FILE,
  YOUTUBE_DL_PATH,
  YOUTUBE_DL_PLATFORM,
}
