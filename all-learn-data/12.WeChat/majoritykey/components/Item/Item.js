// components/Items/Item.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

    data: {
      //注册自定义属性
      type: Object

    },
    movie: {
      type: Boolean,
      value: false
    }
  },
  options: {
    multipleSlots: true
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
    handleclick() {

      var id = this.properties.data.id
      this.triggerEvent("Id", id);
    }
  }
})
