Page({
  data:{
    lists:[]
  },
  onLoad(){
    var lists = wx.getStorageSync('lists');
    /* 有缓存,则加载缓存。没有缓存设置缓存 */
    if(lists){
      this.setData({
        lists
      })
    }else{
      wx.setStorageSync('lists', [])
    }
  },
  onSearch(event){
    /*添加的时候看缓存中是否有对应的item */
    var value = event.detail;
    var lists = wx.getStorageSync('lists');
    var res  = lists.every(item=>item.name!=value);
    if(res && value.trim()){
       lists.push({
         name:value,
         state:false
       });
       /* 设置缓存 */
       wx.setStorageSync("lists",lists)
       this.setData({
         lists
       })
       
    }else{
     /* wx-showToask */
      wx.showToast({
        title: '数据已经存在',
        icon:'error'
      });
    }
  },
  onChange(event){
    var value = event.detail;
    var lists = wx.getStorageSync('lists');
    var obj = lists[event.currentTarget.dataset.index]
    obj.state = value;
    wx.setStorageSync('lists',lists)
    this.setData({
      lists
    })
  },
  handleDelete(event){
    var name = event.currentTarget.dataset.name;
    var lists = wx.getStorageSync('lists');
    var res = lists.filter(item=>item.name !=name);
    wx.setStorageSync('lists', res)
    this.setData({
      lists:res
    })
  }
})
/* 
every,filter,find,includes,some
[{name:"html",state:false}]
 */
