// The MIT License (MIT)
// Copyright © 2021 2jun0, microlink.io hello@microlink.io (microlink.io)
// This code is modified to the repo https://github.com/microlinkhq/youtube-dl-exec
'use strict'

const os = require('os')
const path = require('path')

const YOUTUBE_DL_DIR = process.env.YTDLDWP_to

const YOUTUBE_DL_PLATFORM =
  process.env.YTDLDWP_platform || os.type() === 'Windows_NT' ? 'win32' : 'unix'

const YOUTUBE_DL_FILE =
  YOUTUBE_DL_PLATFORM === 'win32' ? 'youtube-dl.exe' : 'youtube-dl'

const YOUTUBE_DL_PATH = path.join(YOUTUBE_DL_DIR, YOUTUBE_DL_FILE)

module.exports = {
  YOUTUBE_DL_DIR,
  YOUTUBE_DL_FILE,
  YOUTUBE_DL_PATH,
  YOUTUBE_DL_PLATFORM,
}
