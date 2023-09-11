'use strict';
const Controller = require('egg').Controller;

class GetHistoryController extends Controller {
    async index() {
        const { ctx }=this
        var data = await ctx.service.classify.getHistory()
        ctx.body = {
            code: 200,
            res: data,
            msg:'获取历史记录'
        }
        }
}

module.exports = GetHistoryController;