Page({
    data: {
        lists:[]
      },
      onLoad:function(){
          var lists = wx.getStorageSync('lists'); //获取缓存
          // 有缓存，加载缓存，没有缓存，则设置缓存
          if(lists){
              this.setData({
                lists
            })
          }else{
            wx.setStorageSync('lists', [])  //设置缓存
          }

      },
    onSearch(event){
        var value = event.detail;
        //添加的时候看缓存中是否有对应的item
        var lists = wx.getStorageSync('lists');
        var res = lists.every(item=>item.name!=value);
        if(res&&value.trim()){
            lists.push({
                name:value,
                state:false
            });
            wx.setStorageSync("lists",lists)
            this.setData({
                lists
            })
            // 设置缓存

        }else{
            // wx-showtoast
            wx.showToast({
                title: '数据已经存在',
                icon:'error',
            });
        }
        console.log(lists)
    },
    onChange(event){
        var value = event.detail;
        var lists = wx.getStorageSync('lists');
        var obj = lists[event.currentTarget.dataset.index]
        obj.state = value;
        console.log(obj)
        wx.setStorageSync('lists',lists)
        this.setData({
            lists
        })
    },
    handleDelete(event){
        var name = event.currentTarget.dataset.name;
        // console.log(event.currentTarget.dataset.name)
        var lists = wx.getStorageSync('lists');
        var res = lists.filter(item => item.name != name);
        wx.setStorageSync('lists', res)
        this.setData({
            lists:res
        })
    }
})
