<template>
    <div class="loginpic" ref='test' v-lazy:background-image="require('../assets/pic1.jpg')">
        <!-- <div class="loginform"> -->
        <div class="formpic"></div>
        <div class="formcontent">
            <h1 class="logintitle">管理员登录</h1>
            <el-form  :model="ruleForm" label-position="left"  status-icon :rules="rules" ref="ruleForm"  class="demo-ruleForm formstyle">
    <el-form-item  label="用户名" prop="username">
    <el-input v-model.number="ruleForm.username"></el-input>
</el-form-item>
<el-form-item  label="密码" prop="pass">
<el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
</el-form-item>
<el-form-item  label="确认密码" prop="checkPass">
<el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
</el-form-item>
<el-form-item>
<el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
<el-button @click="resetForm('ruleForm')">重置</el-button>
</el-form-item>
</el-form>
        </div>  <!-- 表单外框架 -->
        <!-- </div>  -->
</div>
</template>
<script>
export default {
    mounted(){
    },
data() {
    var validateUser = (rule, value, callback) => {
    if (value === '') {
        callback(new Error('请输入用户名'));
    } else {
        callback();
    }
    };
    var validatePass = (rule, value, callback) => {
    if (value === '') {
        callback(new Error('请输入密码'));
    } else {
        if (this.ruleForm.checkPass !== '') {
        this.$refs.ruleForm.validateField('checkPass');
        }
        callback();
    }
    };
    var validatePass2 = (rule, value, callback) => {
    if (value === '') {
        callback(new Error('请再次输入密码'));
    } else if (value !== this.ruleForm.pass) {
        callback(new Error('两次输入密码不一致!'));
    } else {
        callback();
    }
    };
    return {
    ruleForm: {
        username:'',
        pass: '',
        checkPass: ''
    },
    rules: {
        username:[
            {validator: validateUser,trigger:'blur'}
        ],
        pass: [
        { validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
        { validator: validatePass2, trigger: 'blur' }
        ]
    }
    };
},
methods: {
    submitForm(formName) {
    this.$refs[formName].validate((valid) => {
        if (valid) {
        var {pass,username}=this.ruleForm;
        this.$http.post('/login',{pass,username}).then(res=>{
            //向后台发起http请求，传递账号和密码的值，
            var auth = res.data.auth    //取得验证的值auth=true
            if(auth){   //如果auth存在
            this.$message({
            message:"登录成功",
            type:'success',
            duration:800
        })   //则提示登录成功，并跳转到home页面
            // setTimeout(() => {
            this.$router.push("/books")
            // }, 1500);
            }else {
            this.$message({
            message:"账号或者密码错误",
            type:'error',
            duration:800
        })
        // console.log('error submit!!');//若不存在则提示登陆失败
                return false;   //不做跳转
        }
        })
        }
    });
    },
    resetForm(formName) {
    this.$refs[formName].resetFields();
    }
}
}
</script>
<style>
.loginpic{
    width:100%;
    height: 100%;
    position: absolute;
    top: 50%;
    left:50%;
    z-index: 120;
    transform: translate(-50%,-50%);
    /* background: url('../assets/pic1.jpg'); */
}
    /* .loginpic{
    background: url('../assets/pic1.jpg');
    } */
    /* 磨砂蒙版开始 */
    .formpic{
        position: absolute;
        top: 45%;
        left: 50%;
        transform: translate(-50%,-50%);
        width: 600px;
        height: 400px;
        background:hsla(0,0%,100%,.5);
        border-radius:20px;
        filter: blur(9px);
    }
    /* 磨砂蒙版结束 */

    /* form外框开始 */
    .formcontent{
        font-weight: bold;
        position: absolute;
        top: 45%;
        left: 50%;
        transform: translate(-50%,-50%);
    }
    /* form外框结束 */

    /* form标题颜色开始 */
    .el-form-item__label{
        color: #343a40;
        font-size: 15px;
    }
    /* form标题颜色结束 */

    /* 管理员登录开始 */
    .logintitle{
        font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
        font-weight: bolder;
        font-size: 60px;
        text-align: center;
    }
    /* 管理员登录结束 */

    /* form表单输入栏结构开始 */
    .formstyle{
        display: grid;
        grid-template-rows: repeat(4,1fr);
        align-items: center;
        justify-items: center;
    }
    .formstyle>div:not(:nth-child(4)){
        display: grid;
        grid-template-columns: 1fr 3fr;
    }
    .formstyle>div::after{
        display: none;
    }
    .formstyle>div::before{
        display: none;
    }
    /* form表单输入栏结构结束 */
</style>