// components/Item/Item.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    movie:{
      type:Object
    }
  },

  data: {

  },
  methods: {
    
    handleItem(){
      console.log(this.properties.lists);
      var {id} = this.properties.movie;
    }
  }
})
