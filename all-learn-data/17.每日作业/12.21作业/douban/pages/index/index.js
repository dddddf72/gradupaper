//index.js
//获取应用实例
const http = require("../../models/http.js")
Page({
    data:{
      isShow:true,
    },
   
  onLoad(){
      http({
          keyword:"book",
          success:(res)=>{
            //   console.log(res.data[0].labels)
              res.data.forEach(item=>{
                  item.labels = item.labels.join(" / ");
                  item.price = parseFloat(item.price).toFixed(2)
                if(item.title.length>10){
                    item.title = item.title.slice(0,10)+"..."
                }
                if(item.labels.length>15){
                    item.labels = item.labels.slice(0,15)+"..."
                }
                this.setData({
                    result:res.data
                })
              })
              
          }
      })
  }
})
