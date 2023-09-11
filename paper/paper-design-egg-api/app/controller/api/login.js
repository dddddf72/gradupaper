'use strict';
const Controller = require('egg').Controller;

class LoginController extends Controller {
    async index() {
        const { ctx } = this;
        console.log(ctx.header.origin)
        var { username, pass } = ctx.request.body;
        if (username == 'sst' && pass == '123') {
            ctx.cookies.set('loginAuth',true, {
                httpOnly: false, //设置前端可读
            })
            ctx.body = {
                code: 200,
                auth: true,
                msg:'登录成功'
            }
        } else {
            ctx.body = {
                code: 400,
                msg:'用户名或者密码错误'
            }
        }
    }
}
module.exports = LoginController;