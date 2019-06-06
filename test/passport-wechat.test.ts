const mock = require("egg-mock");
const request = require("supertest");

describe("test/passport-github.test.ts", () => {
  let app: any;
  before(async () => {
    app = mock.app({
      baseDir: "apps/passport-wechat-test"
    });

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
});
