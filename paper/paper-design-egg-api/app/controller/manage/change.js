'use strict';
const Controller = require('egg').Controller;

class ChangeController extends Controller {
    async index() {
        const { ctx } = this;
        var res = await ctx.service.upload.index()
        var hostname = ctx.hostname;
        var { id, title, authors, abstract, collected, news } = res.result
        var imgUrl = `${ctx.origin}/public/upload/${res.name}`
        var result = {id,title,authors,abstract,collected,news,imgUrl}
        await ctx.service.classify.change(result)
        ctx.redirect(`http://${hostname}:8080`)
    }

}
module.exports = ChangeController;