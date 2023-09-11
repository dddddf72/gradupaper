Page({
  data: {
    arr:[
      {name:"html",id:1001},
      {name:"css",id:1002},
      {name:"javaScript",id:1003}
    ]
  },
  onConfirm(event){
   var value = event.detail.value;
   var arr = this.data.arr;
   arr.unshift({
     name:value,
     id:1004
   });
   this.setData({
     arr
   })
  }
})