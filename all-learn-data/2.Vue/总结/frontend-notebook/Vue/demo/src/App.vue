<template>
  <div id="app">
      {{msg | handleStr}}
  </div>
</template>
<script>
import Vue from 'vue'
export default {
  name:"App",
  data(){
    return {
      msg:"你姐姐傅雷家书地方"
    }
  },
  mounted(){
    console.log(this instanceof Vue)
    this.$http.get("http://192.168.4.20:8000/top250").then(res=>{
      console.log(res)
    })
  }
}
</script>

