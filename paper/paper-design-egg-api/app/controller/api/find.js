'use strict';

const Controller = require('egg').Controller;

class FindController extends Controller {
    async index() {
        const { ctx } = this;
        var { m , start , limit } = ctx.query;
        var result = await ctx.service.classify.find({m,start,limit})
        if (result.data.length) {
            ctx.body = {
                code: 200,
                res: result.data,
                total: result.total,
                request:`请求成功${m}`
            };
        } else {
            ctx.body = {
                code: 400,
                request:'参数无效'
            }
        }

    }
}
module.exports = FindController;
