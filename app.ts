import {Application} from 'egg'

const debug = require('debug')('egg-passport-wechat')
const assert = require('assert')
const Strategy = require('passport-wechat-x').Strategy

export default (app: Application) => {
    const config = app.config.passportWechat
    config.passReqToCallback = true

    assert(
        config.key,
        '[egg-passport-wechat] config.passportWechat.key required'
    )
    assert(
        config.secret,
        '[egg-passport-wechat] config.passportWechat.secret required'
    )

    app.passport.use(
        'wechat',
        new Strategy(
            {...config, appID: config.key, appSecret: config.secret},
            (
                req: any,
                accessToken: string,
                refreshToken: string,
                profile: any,
                expires_in: number,
                verified: any
            ) => {
                console.log('arguments = ', {
                    accessToken,
                    refreshToken,
                    profile,
                    expires_in,
                    verified
                })
                const user = {
                    provider: 'wechat',
                    id: profile.unionid || profile.openid,
                    name: profile.nickname,
                    displayName: profile.nickname,
                    photo: profile.headimgurl,
                    gender: profile.sex === 1 ? 'male' : 'female',
                    accessToken,
                    refreshToken,
                    profile
                }

                debug('%s %s get user: %j', req.method, req.url, user)

                console.log('do verifying...', app.passport.doVerify)
                app.passport.doVerify(req, user, verified)
            }
        )
    )
};
