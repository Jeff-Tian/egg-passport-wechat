"use strict";

module.exports = appInfo => {
  const config = {};

  config.keys = "123456";

  config.passportWechat = {
    key: process.env.EGG_PASSPORT_WECHAT_CLIENT_ID || "xxx",
    secret: process.env.EGG_PASSPORT_WECHAT_CLIENT_SECRET || "yyy"
  };

  return config;
};
