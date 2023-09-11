// pages/book/book.js
const { handlestar, getHttpbook } = require("../../models/http")
Page({

  data: {
    book: []
  },
  onLoad: async function () {
    var res = await getHttpbook();
    console.log(res.data)
    var book = res.data;
    book.forEach(item => {
      item["ratingstar"] = handlestar(item.rating);
      item["pic"] = item.coverImage;
      item["raiting"] = item.rating;
    })
    this.setData({
      book
    })

  }

})