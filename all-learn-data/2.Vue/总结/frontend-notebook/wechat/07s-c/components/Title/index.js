// components/Title/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
       title:{
         type:String
       },
       iconUrl:{
         type:String
       },
       keyword:{
         type:String
       }
  },
  data: {

  },
  methods: {
    jumpMore(){
      var {keyword,title} = this.properties;
      wx.navigateTo({
        url: `/pages/more/more?keyword=${keyword}&title=${title}`
      });
    }
  }
})
