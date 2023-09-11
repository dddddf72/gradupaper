import Vue from 'vue';
Vue.filter("handleStr",(val)=>{
    if(val.length>4){
      return val.slice(0,4)+"..."
    }
    return val;
})


