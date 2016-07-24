'use strict'

var fs = require('fs')
var path = require('path')

module.exports = require('./licenses.json')

module.exports.get = function (license) {
  return fs.readFileSync(path.resolve('./licenses', license + '.txt'), 'utf8')
}

module.exports.make = function (license, opts) {
  var text = module.exports.get(license)

  Object.keys(opts).forEach(function (key) {
    text = text.replace(new RegExp('\\[' + key + '\\]', 'g'), opts[key])
  })

  return text
}
