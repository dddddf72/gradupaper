const http = require("../../models/http")
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
     result:"",
     keyword:"",
     searchCities:[],
     visitedCities:[],
     location:""
  },
  onLoad(){
    /* 定位的城市 */
    var location = wx.getStorageSync('locationCity');
    if(location){
      this.setData({
        location
      })
    }
    /* 最近访问的城市 */
    var  cities =  wx.getStorageSync('cities');
    if(cities){
      this.setData({
        visitedCities:cities
      })
    }else{
      wx.setStorageSync('cities', [])
    }
    /* http请求的列表循环 */
    http({url:":8000/city"}).then(res=>{
      let result  = res.data.data;
      let lists = Object.keys(result.cities)
      this.setData({
        result,
        lists
      })
    })
  },
  handleClick(event){

      /* 判断缓存 */
    var cities = wx.getStorageSync('cities'); 
    var name = event.currentTarget.dataset.name;
    if(!cities.includes(name)){
      cities.unshift(name);
    }
    wx.setStorageSync('cities', cities.slice(0,3));
    app.globalData.currentCity = name;
    wx.navigateBack();
  },
  handleChange(event){
    var keyword = event.detail
    var searchCities = this.filterCity(keyword);
    this.setData({
      keyword,
      searchCities
    })
  },
  filterCity(keyword){
    var cities = this.data.result.cities;
    var arr = [];
    for(let key in cities){
       cities[key].forEach(item=>{
         if(item.name.includes(keyword) || item.spell.includes(keyword)){
           arr.push(item);
         }
       })
    }
    return arr;
  }
})
