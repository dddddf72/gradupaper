<template>
  <div>
    <div class="item">
      <img :src="item.productImage" alt />
      <p>{{item.productName}}</p>
      <p style="color: #c20c0c; text-align: left">{{item.salePrice}}</p>
      <el-button type="danger" plain @click="addCart(item._id)">加入购物车</el-button>
    </div>
  </div>
</template>
<script>
/* @-->src */
import UserHttp from '@/models/UserHttp.js'
export default {
    props:{
        item:{
            type:Object
        }
    },
    methods:{
      async addCart(id){
        var res = await UserHttp.addCart(id);
        console.log(res.data);
        var {code,msg} = res.data;
        if(code == 200){
           this.$message({
             message:msg,
             type:"success"
           })
        }else{
          this.$message({
            message:msg,
            type:"error"
          })
        }
      }
    }
}
</script>
<style scoped>
.item img {
  width: 140px;
}
.item {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  text-align: center;
  width: 140px;
  height: 280px;
  background: #fff;
  border: 1px solid #eee;
}
.el-button--danger {
  width: 150px;
}
</style>