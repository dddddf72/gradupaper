<template>
  <div>
    <el-table
      show-summary
      :summary-method="getSummaries"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%"
    >
      <el-table-column label="是否选中" width="55">
        <template slot-scope="scope">
          <el-checkbox v-model="scope.row.checked" @change="handleEdit(scope.row)"></el-checkbox>
        </template>
      </el-table-column>
      <el-table-column label="商品" width="120">
        <template slot-scope="scope">
          <img :src="scope.row.productImage" />
          {{ scope.row.product }}
        </template>
      </el-table-column>
      <el-table-column prop="salePrice" label="价格" width="120">
      </el-table-column>
      <el-table-column label="数量">
        <template slot-scope="scope">
          <el-input-number
            size="mini"
            @change="handleEdit(scope.row)"
            v-model="scope.row.productNum"
            :min="1"
          ></el-input-number>
        </template>
      </el-table-column>
      <el-table-column label="小计" width="120">
        <template slot-scope="scope">
          {{ scope.row.salePrice * scope.row.productNum }}
        </template>
      </el-table-column>
      <el-table-column label="操作" width="120">
        <template slot-scope="scope">
          <el-button type="danger" @click="handleDelete(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <p>全选  <el-checkbox v-model="checkedAll"></el-checkbox></p>
  </div>
</template>

<script>
import UserHttp from "../../models/UserHttp";
export default {
  data() {
    return {
      tableData: []
    };
  },
  computed:{
    checkedAll:{
      get(){
          return  this.tableData.every(item=>item.checked);
      },
      set(val){
        // console.log(val);
        //http
        UserHttp.setAllChecked(val).then(()=>{
          // console.log(res)
        })
        this.tableData.forEach(item=>{
          item.checked = val;
        })
      }
    }
  },
  async mounted() {
    var res = await UserHttp.getCartList();
    this.tableData = res.data.res;
  },
  methods: {
    getSummaries() {
      var sum = 0;
      if (this.tableData.length > 0) {
        this.tableData.forEach((item) => {
          if(item.checked){
            sum += item.salePrice * item.productNum;
          }
        });
      }
      return ["总价", sum];
    },
    async handleEdit(val) {
      var{_id,productNum,checked} = val;
      await UserHttp.editCartList({
          id:_id,
          productNum,
          checked
      })
    },
    async handleDelete(val){
        var {_id} = val;
        
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          console.log(_id);
          var tableData = this.tableData;
          tableData = this.tableData.filter(item=>{
              return item._id !=_id;
          })
          this.tableData = tableData;
          UserHttp.deleteCart(_id).then(res=>{
              console.log(res.data)
              this.$message({
                type: 'success',
                message: res.data.msg
              });
          })
          
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
    }
  }
};
</script>
<style scoped>
img {
  width: 100px;
}
</style>