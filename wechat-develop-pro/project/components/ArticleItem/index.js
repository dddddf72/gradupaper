// components/read-item/read-item.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    data: {
      type: Object
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },
  methods: {


    handleToggle() {
      var id = this.properties.data._id
      wx.navigateTo({
        url: `/pages/articleDetail/index?id=${id}`
      })
    }
  }
})
