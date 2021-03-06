# egg-passport-wechat

> Wechat passport plugin for egg.

[![NPM version][npm-image]][npm-url]
[![Build Status](https://travis-ci.com/Jeff-Tian/egg-passport-wechat.svg?branch=master)](https://travis-ci.com/Jeff-Tian/egg-passport-wechat)
[![codecov](https://codecov.io/gh/Jeff-Tian/egg-passport-wechat/branch/master/graph/badge.svg)](https://codecov.io/gh/Jeff-Tian/egg-passport-wechat)
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-passport-wechat-ts.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-passport-wechat-ts
[david-image]: https://img.shields.io/david/jeff-tian/egg-passport-wechat.svg?style=flat-square
[david-url]: https://david-dm.org/jeff-tian/egg-passport-wechat
[snyk-image]: https://snyk.io/test/npm/egg-passport-wechat-ts/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-passport-wechat-ts
[download-image]: https://img.shields.io/npm/dm/egg-passport-wechat-ts.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-passport-wechat-ts

<!--
Description here.
-->

## Example

Open [https://uniheart.pa-ca.me/passport/wechat](https://uniheart.pa-ca.me/passport/wechat) on your wechat browser to
 see the result:

1. Open your wechat
2. Scan the following QR Code to follow the test public account:
   ![](./images/public-test-account.jpeg)
3. And then scan the following QR Code to open the example site:
   ![](./images/uniheart.png)

## Install

```bash
$ npm i egg-passport-wechat-ts --save
```

## Usage

```js
// {app_root}/config/plugin.[t|j]s
exports.passportWechat = {
  enable: true,
  package: "egg-passport-wechat-ts"
};
```

## Configuration

Single instance example:

```js
// {app_root}/config/config.default.[t|j]s
exports.passportWechat = {
  key: "your oauth key",
  secret: "your oauth secret",
  callbackURL: "https://your.domain.com/your/path/callback" // Notice, absolute url is required
};
```

Multiple instances example:

```js
// {app_root}/config/config.default.[t|j]s
exports.passportWechat = {
  clients: {
    wechat1: {
      key: "your oauth key",
      secret: "your oauth secret",
      callbackURL: "https://your.domain.com/your/path/callback" // Notice, absolute url is required
    },
    wechat2: {
      key: "your oauth key",
      secret: "your oauth secret",
      callbackURL: "https://your.domain.com/your/path/callback" // Notice, absolute url is required
    }
  }
};
```

see [config/config.default.ts](config/config.default.ts) for more detail.

## Example

- https://uniheart.pa-ca.me/passport/wechat

```typescript
app.passport.mount("wechat", app.config.passportWechat);
```

## Questions & Suggestions

Please open an issue [here](https://github.com/Jeff-Tian/egg-passport-wechat/issues).

## License

[MIT](LICENSE)

## Test

```shell
npm run test-local
```

## Release Notes:
