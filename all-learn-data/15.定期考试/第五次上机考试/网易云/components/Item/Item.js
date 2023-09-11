// components/Item/Item.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    music: {
      type: Object
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
    jumpplaylist() {
      var { id } = this.properties.music
      wx.navigateTo({
        url: `/pages/playlist/playlist?id=${id}`
      });
    }
  }
})
