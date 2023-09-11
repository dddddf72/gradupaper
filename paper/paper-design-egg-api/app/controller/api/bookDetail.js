'use strict';
const Controller = require('egg').Controller;
class BookDetailController extends Controller {
    async index() {
        const { ctx } = this;
        var { id } = ctx.query;
        var result = await ctx.service.classify.bookDetail(id)
        if (result.detail.length) {
            ctx.body = {
                code: 200,
                res: result.detail,
                m:result.m,
                request:'请求成功'
            };
        } else {
            ctx.body = {
                code: 400,
                request:'参数无效'
            }
        }

    }
}
module.exports = BookDetailController;
