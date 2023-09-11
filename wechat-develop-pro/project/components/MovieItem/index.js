// components/movie-item/movie-item.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    data: {
      type: Object
    },
    index: {
      type: String
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },
  methods: {
    handleToggle(event) {
      var id = event.currentTarget.dataset.id
      var index = this.properties.index
      console.log(index)
      wx.navigateTo({
        url: `/pages/movieDetail/index?id=${id}&m=${index}`
      });
    }
  }
})
