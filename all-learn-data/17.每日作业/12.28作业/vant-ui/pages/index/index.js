const {getHttpCart  } = require("../../models/http")
Page({
  data: {
    carts:[],
    sum:[]
  },
  onChange(event) {
    this.setData({
      isChecked:event.detail,
      isCheckeded:event.detail
    })
  },
  onChanged(event) {
    this.setData({
      isCheckeded:event.detail
    })
  },
  handlechange(event){
    this.setData({
      isChecked:event.detail
    })
    
  },
  handleChange(){
    this.setData({
      isChecked:!this.data.isChecked
    })
  },
  onSearch(event){

  },
  onLoad:function(){
    getHttpCart({   //使用封装的http请求取得所需数据
      success:res=>{
          this.setData({
            carts:res.data,
          })
      }
    })
  },
  onCount(event){
    this.handleItem("productCount",event);  //封装高度复用的函数
    // var carts = this.data.carts; //取得当前存全部数据的数组
    // let id = event.currentTarget.dataset.id; //通过在标签上自定义id获取id值
    // var num = event.detail; //取得步进器的数值
    // var item = carts.find(item=>item.id==id); //取得数组中对应的id的项，find方法
    // item.productCount = num; //将对应的项的步进器的值设置为步进器修改的数值
    // this.setData({ //重置carts数组
    //   carts
    // })
  },
  onItemChange(event){
    this.handleItem("isSelected",event); //封装高度复用的函数
    // var carts = this.data.carts;  //取得当前存全部数据的数组
    // var state = event.detail;//取得改变后的状态
    // let id = event.currentTarget.dataset.id; //通过在标签上自定义id获取id值
    // var item = carts.find(item=>item.id==id);//取得数组中对应的id的项，find方法
    // item.isSelected = state;//将对应的项的复选框的状态设置为复选框修改的状态
    // this.setData({
    //   carts
    // })
  },
  handleItem(attr,event){
    var carts = this.data.carts; //取得当前存全部数据的数组
    let id = event.currentTarget.dataset.id; //通过在标签上自定义id获取id值
    var value = event.detail; //取得改变的值
    var item = carts.find(item=>item.id==id); //取得数组中对应的id的项，find方法
    item[attr] = value; //将对应的项的值设置为修改后的值
    this.setData({ //重置carts数组
      carts,
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

