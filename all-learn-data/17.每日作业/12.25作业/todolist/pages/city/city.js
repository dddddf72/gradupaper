const { http } = require("../../models/http")
const app = getApp()
Page({
  data: {
    result: [],
    city: "",
    lists: [],
    keyword: "",
    searchCities: [],
    visitedCities: [],
    location: ""
    // 根据搜索框中关键字的长度判断城市区域的隐藏和显示，长度大于1隐藏
  },

  onLoad: function () {
    // 定位的城市
    var location = wx.getStorageSync("locationCity");
    if (location) {
      this.setData({
        location
      })
    }
    // 最近访问的城市
    var cities = wx.getStorageSync('cities');
    if (cities) {
      this.setData({
        visitedCities: cities
      })
    } else {
      wx.setStorageSync('cities', [])
    }

    // http请求的列表循环
    http({
      url: ":8000/city"
    }).then(res => {
      let result = res.data.data;
      let lists = Object.keys(result.cities)
      this.setData({
        result,
        lists
      })
    }
    )
    console.log(app.globalData)
    app.globalData.currentCity = this.data.city
  },

  handleclick(event) {
    var cities = wx.getStorageSync('cities');
    console.log(event.currentTarget.dataset)
    var name = event.currentTarget.dataset.name
    var locationCity = this.data.location;
    if (!cities.includes(name)) {
      cities.unshift(name);
    }
    wx.setStorageSync('cities', cities.slice(0, 3))
    app.globalData.currentCity = name;
    wx.navigateBack();
    // 判断缓存
  },

  onchange(event) {
    var keyword = event.detail;
    var searchCities = this.filterCity(keyword);
    this.setData({
      keyword,
      searchCities
    })
  }
  ,
  filterCity(keyword) {
    var cities = this.data.result.cities;
    var arr = [];
    for (let key in cities) {
      cities[key].forEach(item => {
        if (item.name.includes(keyword) || item.spell.includes(keyword)) {
          arr.push(item);
        }
      })
    }
    return arr;
  },




})
