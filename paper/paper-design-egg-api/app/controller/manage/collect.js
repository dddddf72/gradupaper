'use strict';

const Controller = require('egg').Controller;

class CollectController extends Controller {
    async index() {
        const { ctx } = this;
        var { id } = ctx.request.body;
        var result = await ctx.service.classify.collect(id)
        try {
            if (result[0].nModified) {
                ctx.body = {
                    code: 200,
                    msg: "收藏成功"
                }
            } else {
                ctx.body = {
                    code: 400,
                    msg: "warning 已经收藏,不需要重复操作"
                }
            }
        }
        catch (err) {
            ctx.body = {
                code: 400,
                msg:'参数无效'
            }
        }

    }
    async cancel() {
        const { ctx } = this;
        var { id } = ctx.request.body;
        var result = await ctx.service.classify.cancel(id)
        if (result[0].nModified) {
            ctx.body = {
                code: 200,
                msg: "取消收藏"
            }
        } else {
            ctx.body = {
                code: 400,
                msg: "warning 已经取消收藏,不需要重复操作"
            }
        }
    }
}
module.exports = CollectController;
