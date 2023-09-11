const ArticleHttp = require("../../models/ArticleHttp")

Page({
  data: {
    articles: []
  },
  async onShow() {
    var data = await ArticleHttp.getlist()
    var articles = data.data.result
    this.setData({ articles })
  }
})