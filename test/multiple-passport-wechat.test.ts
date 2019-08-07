import mock from "egg-mock";
const request = require("supertest");

describe("test/multiple-passport-wechat.test.ts", () => {
  let app: any;
  before(async () => {
    app = mock.app({ baseDir: "apps/multiple-passport-wechat-test" });

    return app.ready();
  });

  after(() => app.close());

  afterEach(mock.restore);

  it("should get /", () => {
    return request(app.callback())
      .get("/")
      .expect("hi, passportWechat")
      .expect(200);
  });

  it("should GET /passport/hardway redirect to auth url", async () => {
    return app
      .httpRequest()
      .get("/passport/hardway")
      .expect(302)
      .expect(
        "Location",
        /^https:\/\/open\.weixin\.qq\.com\/connect\/oauth2\/authorize\?appid\=hardway/
      );
  });

  it("should GET /passport/hardway/callback redirect to auth url", () => {
    return request(app.callback())
      .get("/passport/hardway/callback")
      .expect(302)
      .expect(
        "Location",
        /^https:\/\/open\.weixin\.qq\.com\/connect\/oauth2\/authorize\?appid\=hardway/
      );
  });
});
