// components/Item/Item.js
Component({
  /**
   * 组件的属性列表
   */
  options: {
    multipleSlots: true
  },
  properties: {
    // data: {
    //   type: Object
    // },
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
    // handleClick() {
    //   // console.log(this.properties.movie);
    //   console.log(this.properties.data.id);
    //   var id = this.properties.data.id;
    //   this.triggerEvent("Id", id)
    // },
    handleItem() {
      var { id } = this.properties.music;
      wx.navigateTo({
        url: `/pages/playlist/playlist?id=${id}`
      })
    }
  }
})
