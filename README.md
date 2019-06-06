# egg-passport-wechat

> Wechat passport plugin for egg.

[![NPM version][npm-image]][npm-url]
[![Build Status](https://travis-ci.com/Jeff-Tian/egg-passport-wechat.svg?branch=master)](https://travis-ci.com/Jeff-Tian/egg-passport-wechat)
[![codecov](https://codecov.io/gh/Jeff-Tian/egg-passport-wechat/branch/master/graph/badge.svg)](https://codecov.io/gh/Jeff-Tian/egg-passport-wechat)
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-passport-wechat.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-passport-wechat
[david-image]: https://img.shields.io/david/jeff-tian/egg-passport-wechat.svg?style=flat-square
[david-url]: https://david-dm.org/jeff-tian/egg-passport-wechat
[snyk-image]: https://snyk.io/test/npm/egg-passport-wechat/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-passport-wechat
[download-image]: https://img.shields.io/npm/dm/egg-passport-wechat.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-passport-wechat

<!--
Description here.
-->

## Install

```bash
$ npm i egg-passport-wechat --save
```

## Usage

```js
// {app_root}/config/plugin.[t|j]s
exports.passportWechat = {
  enable: true,
  package: "egg-passport-wechat"
};
```

## Configuration

```js
// {app_root}/config/config.default.[t|j]s
exports.passportWechat = {
  key: "your oauth key",
  secret: "your oauth secret"
};
```

see [config/config.default.ts](config/config.default.ts) for more detail.

## Example

<!-- example here -->

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)

## Test

```shell
npm run test-local
```

## Release Notes:
