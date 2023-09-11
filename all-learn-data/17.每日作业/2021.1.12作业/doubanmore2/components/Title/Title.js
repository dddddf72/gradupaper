// components/Title/Title.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title:{
      type:String
    },
    keyword:{
      type:String
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    jumpMore(){
      var {keyword,title} = this.properties;
      // console.log(keyword);//newmusic
      wx.navigateTo({
        url: `/pages/more/more?keyword=${keyword}&title=${title}`
      });
    }
  }
})
