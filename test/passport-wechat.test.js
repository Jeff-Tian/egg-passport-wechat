const mock = require('egg-mock');
const request = require('supertest');
describe('test/passport-github.test.ts', () => {
    let app;
    before(async () => {
        app = mock.app({
            baseDir: 'apps/passport-wechat-test'
        });
        return app.ready();
    });
    after(() => app.close());
    afterEach(mock.restore);
    it('should get /', () => {
        return request(app.callback())
            .get('/')
            .expect('hi, passportWechat')
            .expect(200);
    });
    it('should GET /passport/wechat redirect to auth url', async () => {
        return app
            .httpRequest()
            .get('/passport/wechat')
            .expect(302)
            .expect('Location', /^https:\/\/open\.weixin\.qq\.com\/connect\/oauth2\/authorize\?appid\=/);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFzc3BvcnQtd2VjaGF0LnRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwYXNzcG9ydC13ZWNoYXQudGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLElBQUksR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUE7QUFDaEMsTUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFBO0FBRXBDLFFBQVEsQ0FBQyw4QkFBOEIsRUFBRSxHQUFHLEVBQUU7SUFDMUMsSUFBSSxHQUFRLENBQUE7SUFDWixNQUFNLENBQUMsS0FBSyxJQUFJLEVBQUU7UUFDZCxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQztZQUNYLE9BQU8sRUFBRSwyQkFBMkI7U0FDdkMsQ0FBQyxDQUFBO1FBRUYsT0FBTyxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUE7SUFDdEIsQ0FBQyxDQUFDLENBQUE7SUFFRixLQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUE7SUFFeEIsU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQTtJQUV2QixFQUFFLENBQUMsY0FBYyxFQUFFLEdBQUcsRUFBRTtRQUNwQixPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUM7YUFDekIsR0FBRyxDQUFDLEdBQUcsQ0FBQzthQUNSLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQzthQUM1QixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUE7SUFDcEIsQ0FBQyxDQUFDLENBQUE7SUFFRixFQUFFLENBQUMsa0RBQWtELEVBQUUsS0FBSyxJQUFJLEVBQUU7UUFDOUQsT0FBTyxHQUFHO2FBQ0wsV0FBVyxFQUFFO2FBQ2IsR0FBRyxDQUFDLGtCQUFrQixDQUFDO2FBQ3ZCLE1BQU0sQ0FBQyxHQUFHLENBQUM7YUFDWCxNQUFNLENBQUMsVUFBVSxFQUFFLHVFQUF1RSxDQUFDLENBQUE7SUFDcEcsQ0FBQyxDQUFDLENBQUE7QUFDTixDQUFDLENBQUMsQ0FBQSJ9