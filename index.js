'use strict'

var fs = require('fs')
var path = require('path')

module.exports = require('./licenses.json')

module.exports.get = function (license) {
  return fs.readFileSync(path.resolve('./licenses', license + '.txt'), 'utf8')
}

module.exports.make = function (license, opts) {
  var text = fs.readFileSync(path.resolve('./licenses', license + '.txt'), 'utf8')

  Object.keys(opts).forEach(function (key) {
    text.replace(new RegExp('[' + key + ']', 'g'), opts[key])
  })

  return text
}
