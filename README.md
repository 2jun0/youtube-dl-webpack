# youtube-dl downloader plugin for webpack

[![npm][npm-image]][npm-url]
[![MIT License][mit-license-image]][mit-license-url]

[npm-url]: https://www.npmjs.com/package/youtube-dl-webpack
[npm-image]: https://img.shields.io/npm/v/youtube-dl-webpack.svg?label=npm%20version
[mit-license-url]: LICENSE
[mit-license-image]: https://camo.githubusercontent.com/d59450139b6d354f15a2252a47b457bb2cc43828/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f6c2f7365727665726c6573732e737667

A simple Node.js youtube-dl wrapper for webpack <br>
This repository is a port version of [youtube-dl-exec](https://github.com/microlinkhq/youtube-dl-exec) for webpack

## Why

- Executes any command in an efficient way.
- Use `youtube-dl` in webpack

## Installation

`npm install --save youtube-dl-wepback`

## Usage

### In webpack build config

```js
const { YoutubeDlDownloaderPlugin } = require('youtube-dl-wepback')

module.exports = {
  ...
  plugins: [
    new YoutubeDlDownloaderPlugin({
      to: 'lib',    // A directory to save file
      from: 'auto', // A site to download file (auto, github or website)
    })
    ...
  ]
}
```

see [plugin options](https://github.com/2jun0/youtube-dl-downloader-webpack-plugin#options-and-defaults-optional) to know detail.

### Use youtubedl in your codes

```js
const youtubedl = require('youtube-dl-wepback')

youtubedl('https://example.com', {
  dumpSingleJson: true,
  noWarnings: true,
  noCallHome: true,
  noCheckCertificate: true,
  preferFreeFormats: true,
  youtubeSkipDashManifest: true,
  referer: 'https://example.com',
}).then(output => console.log(output))
```

It's equivalent to:

```bash
$ youtube-dl https://example.com --dump-single-json --no-warnings --no-call-home --no-check-certificate --prefer-free-formats --youtube-skip-dash-manifest --referer=https://example.com
```

## Contribution

We welcome your contribution in any way.
