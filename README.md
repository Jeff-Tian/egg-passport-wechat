# egg-passport-wechat

> 为 egg 项目打造的微信 passport 插件（支持手机端微信登录）。

[![NPM version][npm-image]][npm-url]
[![Build Status](https://travis-ci.com/Jeff-Tian/egg-passport-wechat.svg?branch=master)](https://travis-ci.com/Jeff-Tian/egg-passport-wechat)
[![codecov](https://codecov.io/gh/Jeff-Tian/egg-passport-wechat/branch/master/graph/badge.svg)](https://codecov.io/gh/Jeff-Tian/egg-passport-wechat)
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[中文](./README.md)

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

## 示例

从手机微信端打开 [https://uniheart.pa-ca.me/passport/wechat](https://uniheart.pa-ca.me/passport/wechat) 即可查看微信登录示例：

1. 用手机打开微信扫一扫
2. 扫描并关注以下测试公众账号：
   ![](./images/public-test-account.jpeg)
3. 然后扫描以下二维码以打开本[示例站点](https://uniheart.pa-ca.me)：
   ![](./images/uniheart.png)

## 安装

```bash
$ npm i egg-passport-wechat-ts --save
```

## 使用

```js
// {app_root}/config/plugin.[t|j]s
exports.passportWechat = {
  enable: true,
  package: "egg-passport-wechat-ts"
};
```

## 配置

单个实例的配置：

```js
// {app_root}/config/config.default.[t|j]s
exports.passportWechat = {
  key: "your oauth key",
  secret: "your oauth secret",
  callbackURL: "https://your.domain.com/your/path/callback" // 注意，目前需要配置完整的 URL
};
```

多实例的配置示例：

```js
// {app_root}/config/config.default.[t|j]s
exports.passportWechat = {
  clients: {
    wechat1: {
      key: "your oauth key",
      secret: "your oauth secret",
      callbackURL: "https://your.domain.com/your/path/callback" // 注意，目前需要配置完整的 URL
    },
    wechat2: {
      key: "your oauth key",
      secret: "your oauth secret",
      callbackURL: "https://your.domain.com/your/path/callback" // 注意，目前需要配置完整的 URL
    }
  }
};
```

参考 [config/config.default.ts](config/config.default.ts) 查看更多详情。

## 在线示例

- https://uniheart.pa-ca.me/passport/wechat

## 在项目中使用

```typescript
app.passport.mount("wechat", app.config.passportWechat);
```

## 问题和建议

在 [这里](https://github.com/Jeff-Tian/egg-passport-wechat/issues) 提问。

## 许可

[MIT](LICENSE)

## 测试

```shell
npm run test-local
```

## Release Notes:
