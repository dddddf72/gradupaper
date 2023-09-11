'use strict';
const Controller = require('egg').Controller;

class GetNewsController extends Controller {
    async index() {
        const { ctx } = this
        var data = await ctx.service.classify.getNews()
        ctx.body = {
            code: 200,
            res: data,
            msg: '获取新书记录'
        }
    }
}

module.exports = GetNewsController;