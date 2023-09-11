'use strict';
const Controller = require('egg').Controller;

class UploaderController extends Controller {
    async index() {
        const { ctx } = this;
        var hostname = ctx.hostname;
        var res = await ctx.service.upload.index()
        var { m, title, authors, abstract, collected, news } = res.result
        console.log(m)
        var imgUrl = `${ctx.origin}/public/upload/${res.name}`
        var result = { m, title, authors, abstract, collected, news, imgUrl }

        await ctx.service.classify.doAdd(result)
        ctx.redirect(`http://${hostname}:8080`)
    }
}
module.exports = UploaderController;