"use strict";

module.exports = appInfo => {
  const config = {};

  config.keys = "123456";

  config.passportWechat = {
    clients: {
      wechat: {
        key: "xxx",
        secret: "yyy"
      },
      hardway: {
        key: "hardway",
        secret: "hardway"
      }
    }
  };

  return config;
};
