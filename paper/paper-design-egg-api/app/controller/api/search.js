'use strict';
const Controller = require('egg').Controller;

class ChangeController extends Controller {
    async index() {
        const { ctx } = this
        var { keyword,m } = ctx.query;
        var res = await ctx.service.classify.search(keyword,m);
        var total = []
        for (let i in res.detail) {
            total.push(i)
        }
        if (total.length != 0) {
            if (m != undefined) {
                if(res.detail2.length != 0) {
                    ctx.body = {
                        code: 200,
                        res:res.detail2,
                        msg:'搜索成功'
                    }
                } else {
                    ctx.body = {
                        code: 400,
                        msg:'无结果'
                    }
                }
            } else {
                ctx.body = {
                    code: 200,
                    res: res.detail,
                    msg:'搜索成功'
                }
            }

        } else {
            ctx.body = {
                code: 400,
                msg:'无结果'
            }
        }
    }

}

module.exports = ChangeController;