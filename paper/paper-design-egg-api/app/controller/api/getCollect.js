'use strict';
const Controller = require('egg').Controller;

class GetCollectController extends Controller {
    async index() {
        const { ctx }=this
        var data = await ctx.service.classify.getCollect()
        ctx.body = {
            code: 200,
            res: data,
            msg:'获取藏书'
        }
        }
}

module.exports = GetCollectController;