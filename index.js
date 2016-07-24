'use strict'

var fs = require('fs')
var path = require('path')

module.exports = require('./licenses.json')

module.exports.get = function (license) {
  return fs.readFileSync(path.resolve('./licenses', license + '.txt'), 'utf8')
}
