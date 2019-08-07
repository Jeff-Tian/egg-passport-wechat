"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const egg_mock_1 = tslib_1.__importDefault(require("egg-mock"));
const request = require("supertest");
describe("test/multiple-passport-wechat.test.ts", () => {
    let app;
    before(async () => {
        app = egg_mock_1.default.app({ baseDir: "apps/multiple-passport-wechat-test" });
        return app.ready();
    });
    after(() => app.close());
    afterEach(egg_mock_1.default.restore);
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
            .expect("Location", /^https:\/\/open\.weixin\.qq\.com\/connect\/oauth2\/authorize\?appid\=hardway/);
    });
    it("should GET /passport/hardway/callback redirect to auth url", () => {
        return request(app.callback())
            .get("/passport/hardway/callback")
            .expect(302)
            .expect("Location", /^https:\/\/open\.weixin\.qq\.com\/connect\/oauth2\/authorize\?appid\=hardway/);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGlwbGUtcGFzc3BvcnQtd2VjaGF0LnRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtdWx0aXBsZS1wYXNzcG9ydC13ZWNoYXQudGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxnRUFBNEI7QUFDNUIsTUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBRXJDLFFBQVEsQ0FBQyx1Q0FBdUMsRUFBRSxHQUFHLEVBQUU7SUFDckQsSUFBSSxHQUFRLENBQUM7SUFDYixNQUFNLENBQUMsS0FBSyxJQUFJLEVBQUU7UUFDaEIsR0FBRyxHQUFHLGtCQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsT0FBTyxFQUFFLG9DQUFvQyxFQUFFLENBQUMsQ0FBQztRQUVsRSxPQUFPLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNyQixDQUFDLENBQUMsQ0FBQztJQUVILEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUV6QixTQUFTLENBQUMsa0JBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUV4QixFQUFFLENBQUMsY0FBYyxFQUFFLEdBQUcsRUFBRTtRQUN0QixPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUM7YUFDM0IsR0FBRyxDQUFDLEdBQUcsQ0FBQzthQUNSLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQzthQUM1QixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDakIsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsbURBQW1ELEVBQUUsS0FBSyxJQUFJLEVBQUU7UUFDakUsT0FBTyxHQUFHO2FBQ1AsV0FBVyxFQUFFO2FBQ2IsR0FBRyxDQUFDLG1CQUFtQixDQUFDO2FBQ3hCLE1BQU0sQ0FBQyxHQUFHLENBQUM7YUFDWCxNQUFNLENBQ0wsVUFBVSxFQUNWLDhFQUE4RSxDQUMvRSxDQUFDO0lBQ04sQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsNERBQTRELEVBQUUsR0FBRyxFQUFFO1FBQ3BFLE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQzthQUMzQixHQUFHLENBQUMsNEJBQTRCLENBQUM7YUFDakMsTUFBTSxDQUFDLEdBQUcsQ0FBQzthQUNYLE1BQU0sQ0FDTCxVQUFVLEVBQ1YsOEVBQThFLENBQy9FLENBQUM7SUFDTixDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDIn0=