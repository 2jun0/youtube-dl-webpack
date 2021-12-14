// The MIT License (MIT)
// Copyright © 2021 2jun0, microlink.io hello@microlink.io (microlink.io)
// This code is modified to the repo https://github.com/microlinkhq/youtube-dl-exec
'use strict'

const dargs = require('dargs')
const execa = require('execa')
const { YOUTUBE_DL_PATH } = require('./options.js')

const args = (url, flags = {}) =>
  [].concat(url, dargs(flags, { useEquals: false })).filter(Boolean)

const isJSON = (str = '') => str.startsWith('{')

const parse = ({ stdout }) => (isJSON(stdout) ? JSON.parse(stdout) : stdout)

const create = youtubedlPath => {
  const fn = (url, flags, opts) => fn.exec(url, flags, opts).then(parse)
  fn.exec = (url, flags, opts) => execa(youtubedlPath, args(url, flags), opts)
  return fn
}

module.exports = create(YOUTUBE_DL_PATH)
module.exports.create = create
module.exports.args = args
module.exports.isJSON = isJSON
