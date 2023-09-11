<template>
  <div class="top">
    <div class="container">
      <img class="logo" src="@/assets/images/logo.svg"  />
      <div>
        <span>{{name}}</span>
        <router-link to="/login" v-show="!name"><el-button >登陆</el-button></router-link>
        <el-button @click="handleLogout" >退出</el-button>
        <router-link to="/cart">
          <el-button type="danger" icon="el-icon-shopping-cart-full">购物车</el-button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import UserHttp  from '@/models/UserHttp.js'
export default {
  data(){
    return{
      name:this.$cookie.get("name")
    }
  },
  methods:{
    async handleLogout(){
      var res = await UserHttp.logout();
      console.log(res.data)
      var {msg} = res.data;
      this.$message({
        message:msg
      })
      this.name = ""
    }
  }
};
</script>

<style scoped>
.top {
  background: #fff;
}
.logo {
  width: 50px;
}
.container {
  margin: 0 auto;
  width: 1100px;
  display: flex;
  align-items: center;
  height: 60px;
  justify-content: space-between;
}
.el-button{
    margin-left: 20px;
}
</style>