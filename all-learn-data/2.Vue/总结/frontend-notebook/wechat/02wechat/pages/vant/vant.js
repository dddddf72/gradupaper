// pages/vant/vant.js
const {
  getHttpCart
} = require("../../models/http")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    carts: [],
    sum: ""
  },
  onLoad() {
    getHttpCart({
      success: res => {
        this.setData({
          carts: res.data
        })
      }
    })
  },
  onCount(event) {
    /* 1.监听商品数量的改变,得到小计的价格 productCount */
    var carts = this.data.carts;
    var count = event.detail;
    var id = event.currentTarget.dataset.id;
    var item = carts.find(item => item.id == id);
    item.productCount = count;
    this.setData({
      carts
    })
  },
  onItemChange(event) {
    /* 2.改变对应item的checkbox的状态  isSelected*/
    this.handleItem("isSelected", event)
  },
  handleItem(attr, event) {
    var carts = this.data.carts;
    var value = event.detail;
    var id = event.currentTarget.dataset.id;
    var item = carts.find(item => item.id == id);
    item[attr] = value;
    this.setData({
      carts
    })
  },
  onSum(event){
    var carts = this.data.carts;
    var value = event.detail;
    carts.forEach(item=>{
      item.isSelected = value;
    })
    this.setData({
      carts
    })
  }
})