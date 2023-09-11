Page({
  data:{
    msg:"hello world",
    isFocus:true,
    arr:[{
      name:"html"
    },
  {
    name:"javascript"
  },
  {
    name:"css"
  }
  ],
  // 控制音乐播放的状态
  isPlay:false
  },
  handleClick(){
    this.setData({
      msg:"change"
    })
  },
  onFocus(){
    console.log(1)
  },
  handleSubmit(event){
    console.log(event.detail.value)
  },
  handleMusic(){
    //获取data中的值
    console.log(this.data.isPlay)
    // if(this.data.isPlay){
    //   this.setData({
    //     isPlay:false
    //   })
    // }
    this.setData({
      isPlay:!this.data.isPlay
    })
  }

  // onLoad(){
  //   // http请求
  //   var reqTask = wx.request({
  //     url: 'http://localhost:8000/firstpage',
  //     data: {
  //       result:""
  //     },
  //     header: {'content-type':'application/json'},
  //     method: 'GET',
  //     dataType: 'json',
  //     responseType: 'text',
  //     success: (result)=>{
  //       console.log(result.data.result1)
  //       this.setData({
  //         result:result.data.result1
  //       })
  //     },
  //     fail: ()=>{},
  //     complete: ()=>{}
  //   });
  // }
  })
  //事件处理函数
 