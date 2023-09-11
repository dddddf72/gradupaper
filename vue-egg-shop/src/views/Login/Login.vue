<template>
  <div class="home">
    <el-form
      status-icon
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="用户名" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input
          type="password"
          v-model="ruleForm.pass"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')"
          >登录</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import UserHttp from '@/models/UserHttp.js'
export default {
  name: "Home",
  data() {
    var validatePass = (rule,value,callback)=>{
      if(value===""){
        callback(new Error("密码不能为空"))
      }else {
        /* 数字,大小写字母,特殊字符组成长度不能小于6 */
        if(value.length<5){
          callback(new Error("密码长度不能小于5位"))
        }else{
          callback()
        }
      }
    }
    return {
      ruleForm: {
        name: "",
        pass: "",
      },
      //表单验证规则
      rules: {
        name: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 5, message: "用户名最少是5个字符", trigger: "blur" },
        ],
        pass:[
          {required:true,validator: validatePass}
        ]
      },
    };
  },
  methods:{
    submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          console.log(valid)
          if (valid) {
             console.log(this.ruleForm);
             UserHttp.login(this.ruleForm).then(res=>{
                 console.log(res.data)
                 var {code,msg} = res.data;
                 if(code==200){
                     this.$message({
                         message:msg,
                         type:"success"
                     })
                     this.$router.push("/")
                 }else{
                     this.$message({
                         message:msg,
                         type:"error"
                     })
                 }
             })
            // HTTP
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
  }
};
</script>
<style scoped>
</style>