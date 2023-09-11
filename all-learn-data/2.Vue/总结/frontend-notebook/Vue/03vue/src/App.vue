<template>
  <div>
    
  </div>

</template>
<script>
import axios from 'axios';
export default {
  name: "App",
  mounted(){
    let url  = "http://192.168.4.20:8000/top250";
    axios.get(url).then(res=>{
      console.log(res)
    })
  }
};
</script>
<style>
</style>
