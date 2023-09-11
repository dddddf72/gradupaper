'use strict';
const Controller = require('egg').Controller;

class DeleteController extends Controller {
    async index() {
        const { ctx } = this;
        var { id } = ctx.request.body;
        var result = await ctx.service.classify.delete(id)
        if (result) {
            ctx.body = {
                code: 200,
                msg:'删除成功'
            }
        } else {
            ctx.body = {
                code: 400,
                msg:'参数无效'
            }
        }
    }
}
module.exports = DeleteController;