"use strict";

module.exports = app => {
  const { router } = app;

  router.get("/", ctx => {
    ctx.body = "hi, " + app.plugins.passportWechat.name;
  });

  app.passport.mount("wechat");
  app.passport.mount("hardway", app.config.passportWechat.hardway);
};
