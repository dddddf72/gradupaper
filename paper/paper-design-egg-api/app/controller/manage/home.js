'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    // var result = await ctx.service.classify.find()
    await ctx.render('doAdd.html')
  }
}

module.exports = HomeController;
