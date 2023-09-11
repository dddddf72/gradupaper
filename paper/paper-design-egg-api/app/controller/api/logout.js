'use strict';
const Controller = require('egg').Controller;

class LogoutController extends Controller {
    async index() {
        this.ctx.cookies.set('loginAuth',"")
        this.ctx.body = {
            code: 200,
            msg:'退出登录'
        }
    }

}

module.exports = LogoutController;