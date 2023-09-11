const {handleHttpCat,handleNum} = require("../../models/http")

Page({
    data:{
        playlists:[]
    },
  onLoad:function(options){
    this.getHttpData();
    
        },
    onReachBottom(){
        this.getHttpData();
        console.log(this.data.playlists)
    },
    getHttpData(){
        // handleHttpCat({
        //     offset:this.data.playlists.length,
        //   success:res=>{
        //       let playlists = [...this.data.playlists,...res.data.playlists]
            
        //       playlists.forEach(item=>{
        //           item.playCount = handleNum(item.playCount);
        //       })
        //       this.setData({
        //           playlists
        //       })
        //      }
        //    })
        var offset=this.data.playlists.length;
        wx.request({
            url: `http://192.168.4.18:3000/top/playlist?cat=华语&limit=15&offset=${offset}`,
            data: {},
            header: {'content-type':'application/json'},
            method: 'GET',
            dataType: 'json',
            responseType: 'text',
            success: (res)=>{
                let playlists = [...this.data.playlists,...res.data.playlists]
            
              playlists.forEach(item=>{
                  item.playCount = handleNum(item.playCount);
              })
              this.setData({
                  playlists
              })
            }
        })
    },
    handleToggle(event){
        let id = event.currentTarget.dataset.id;
        wx.navigateTo({
            url: `/pages/music-detail/music-detail?id=${id}`
        });
      }
      })
