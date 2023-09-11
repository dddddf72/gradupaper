'use strict';
const Controller = require('egg').Controller;
class HistoryController extends Controller {
    async index() {
        const { ctx } = this;
        var { id } = ctx.query;
        var res = await ctx.service.classify.history(id)
        if (res) {
            ctx.body = {
                code: 200,
                msg:'已添加到历史记录'
            }
        } else {
            ctx.body = {
                code: 400,
                msg:'历史记录中已存在'
            }
        }
    }
}
module.exports = HistoryController;
