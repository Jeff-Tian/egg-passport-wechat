"use strict";

module.exports = appInfo => {
  const config = {};

  config.keys = "123456";

  config.passportWechat = {
    key: process.env.EGG_PASSPORT_WECHAT_CLIENT_ID || "wx0b0b4582c0938304",
    secret:
      process.env.EGG_PASSPORT_WECHAT_CLIENT_SECRET ||
      "5490690d9623c0b8898345ccca1aa6c2"
  };

  return config;
};
