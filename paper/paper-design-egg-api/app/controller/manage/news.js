'use strict';

const Controller = require('egg').Controller;

class AddnewsController extends Controller {
    async index() {
        const { ctx } = this;
        var { id } = ctx.request.body;
        var result = await ctx.service.classify.addnews(id)
        try {
            if (result[0].nModified) {
                ctx.body = {
                    code: 200,
                    msg: "成功设为新书"
                }
            } else {
                ctx.body = {
                    code: 400,
                    msg: "warning 已设为新书,不需要重复操作"
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
        var result = await ctx.service.classify.cancelnews(id)
        if (result[0].nModified) {
            ctx.body = {
                code: 200,
                msg: "取消新书"
            }
        } else {
            ctx.body = {
                code: 400,
                msg: "warning 已经取消新书,不需要重复操作"
            }
        }
    }
}
module.exports = AddnewsController;
