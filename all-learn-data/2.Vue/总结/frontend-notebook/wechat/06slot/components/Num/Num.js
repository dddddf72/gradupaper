// components/Num/Num.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    num:{
      type:Number,
      /* 当接收的父组件中的值变化的时候,就会触发observer */
      observer:function(newVal,oldVal){
        let value = newVal +"px"
         this.setData({
           _num:value
         })
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    _num:""
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
