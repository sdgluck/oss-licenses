# oss-licenses

> A collection of OSS license texts

<a href="http://badge.fury.io/js/oss-licenses"><img alt="npm version" src="https://badge.fury.io/js/oss-licenses.svg"></a>
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

A collection of OSS license texts taken from
[choosealicense.com](https://github.com/github/choosealicense.com/tree/gh-pages/_licenses)
but with all header information stripped out of actual license texts and moved to `licenses.json`.

## Install

```sh
npm i --save oss-licenses
```

## Import

```js
// ES2015
import licenses from 'oss-licenses'

// CommonJS
var licenses = require('oss-licenses')
```

## API

The main export is [`licenses.json`](https://github.com/sdgluck/oss-licenses/blob/master/licenses.json).

### `get(license)`

Get a license text.

- __license__ {String} License name

## Licenses

- afl-3.0
- agpl-3.0
- apache-2.0
- artistic-2.0
- bsd-2-clause
- bsd-3-clause-clear
- bsd-3-clause
- cc-by-4.0
- cc-by-sa-4.0
- cc0-1.0
- epl-1.0
- eupl-1.1
- gpl-2.0
- gpl-3.0
- isc
- lgpl-2.1
- lgpl-3.0
- lppl-1.3c
- mit
- mpl-2.0
- ms-pl
- ms-rl
- ofl-1.1
- osl-3.0
- unlicense
- wtfpl
- zlib

## Contributing

All pull requests and issues welcome!

If you're not sure how, check out Kent C. Dodds'
[great video tutorials on egghead.io](https://egghead.io/lessons/javascript-identifying-how-to-contribute-to-an-open-source-project-on-github)!

## Author & License

`oss-licenses` was created by [Sam Gluck](https://twitter.com/sdgluck) and is released under the MIT license.
