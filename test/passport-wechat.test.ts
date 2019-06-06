const mock = require('egg-mock')
const request = require('supertest')

describe('test/passport-github.test.ts', () => {
    let app: any
    before(async () => {
        app = mock.app({
            baseDir: 'apps/passport-wechat-test'
        })

        return app.ready()
    })

    after(() => app.close())

    afterEach(mock.restore)

    it('should get /', () => {
        return request(app.callback())
            .get('/')
            .expect('hi, passportWechat')
            .expect(200)
    })

    it('should GET /passport/wechat redirect to auth url', async () => {
        return app
            .httpRequest()
            .get('/passport/wechat')
            .expect(302)
            .expect(
                'Location',
                /^https:\/\/open\.weixin\.qq\.com\/connect\/oauth2\/authorize\?appid\=/
            )
    })

    it('should GET /passport/wechat/callback redirect to auth url', () => {
        return request(app.callback())
            .get('/passport/wechat/callback')
            .expect(302)
            .expect(
                'Location',
                /^https:\/\/open\.weixin\.qq\.com\/connect\/oauth2\/authorize\?appid\=/
            )
    })
})
