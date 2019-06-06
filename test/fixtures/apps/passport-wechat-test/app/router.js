"use strict";

module.exports = app => {
  const { router } = app;

  router.get("/", ctx => {
    ctx.body = "hi, " + app.plugins.passportWechat.name;
  });

  app.passport.mount("wechat");
};
