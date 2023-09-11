const { http1 } = require("../../models/http")
Page({
  data: {
    result: "",
    playstates: {},
    previd: ""
  },
  handleMusic(event) {
    let id = event.currentTarget.dataset.id;
    let playstates = this.data.playstates;
    if (this.data.previd != id) {
      playstates[id] = true;
      for (var key in playstates) {
        if (key != id) {
          playstates[key] = false;
        }
      }
      this.setData({
        playstates,
        previd: id
      })
    } else {
      playstates[id] = !playstates[id];
      this.setData({
        playstates
      })
    }
  }
  ,
  onchange(event) {
    var keyword = event.detail;
    if (keyword == "") {
      keyword = undefined;
    }
    http1({
      keyword: keyword,
      success: res => {
        var result = res.data.result.albums
        this.setData({
          result
        })
      }
    })
  }
})
