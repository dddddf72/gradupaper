<template>
  <div id="app">
    <!-- 标题栏 + 搜索栏-->
    <div v-show="$route.name!='login'" class="titleAsearch">
      <div><p class="title iconfont icon-tushuguan"> 图书管理</p>
      <p>
        书山有路勤为径 学海无涯苦作舟
        </p>
        </div>

      <div class="search" v-show="$route.name!='login'">
        <div class="searchclass">
    <el-radio v-show="$route.name!='search'" v-model="radio" label="1">本类搜索</el-radio>
    <el-radio  v-model="radio"  label="2">全类搜索</el-radio>
  </div>
      <van-search
  v-model="value"
  shape="square"
  background="#fff"
  placeholder=" 请输入搜索关键词"
  autofocus="true"
  @search="onSearch"
/>
    </div>

      <div class="managecenter">
        <el-button class="iconfont icon-jurassic_admin" v-show="$route.name!='login'" @click="handleCenter"> 管理中心</el-button>
      </div>

      <div>
        <el-button class="iconfont icon-tuichudenglu" v-show="$route.name!='login'" @click="handleLogout"> 退出登录</el-button>
      </div>

    </div>

    <!-- 标题+搜索栏结束 -->


<!-- 内容+导航 -->
  <!-- <div  :class="$route.name!='login'?'contentAtitle':''"> -->
    <!-- <div> -->
    <!-- 左侧折叠栏 -->
    <div  v-show="$route.name!='login'" class="leftbar" ref="circleleft">
      <el-collapse class="activebarleft" v-model="activeNamesLeft"  @change="handleleft(index,item.m)"  v-for="(item,index) of titlebarleft" :key="item.name" accordion>
    <el-collapse-item class="leftbaritem" :name='item.ordername'>
    <template  slot="title">
      <div class="titleoutleft" ref="changeleft">
        <i :class="[item.iconfont,active==index?'current':'']"></i>
      <span :class="['titlenameleft',active==index?'current':'']">{{item.titlename}}</span>
      </div>
    </template>
    <div :class="['titlefontleft',active==index?'current':'',leftpop?'fonthide':'']">{{item.name}}</div>
  </el-collapse-item>
</el-collapse>
    </div>

  <!-- <div></div> 路由替代栏 -->

    <!-- 右侧折叠栏 -->
    <div  v-show="$route.name!='login'" class="rightbar" ref="circleright">
      <el-collapse class="activebarright" v-model="activeNamesRight" @change="handleright(index,item.m)"  v-for="(item,index) of titlebarright" :key="item.name" accordion>
    <el-collapse-item class="rightbaritem" >
    <template slot="title">
      <div class="titleoutright" ref="changeright">
      <span :class="['titlenameright',active==index+11?'current':'']">{{item.titlename}}</span>
      <i :class="[item.iconfont,active==index+11?'current':'']"></i>
      </div>
    </template>
      <div :class="['titlefontright',active==index+11?'current':'',rightpop?'fonthide':'']">{{item.name}}</div>
  </el-collapse-item>
</el-collapse>
    </div>
      <!-- </div> -->

<!-- 路由栏 -->
  <div :class="$route.name!='login'?'appcontent':''">
    <Fade>
      <router-view></router-view>
  </Fade>
  </div>

  <div class="addbook">
    <el-button v-show="$route.name!='login'" type="primary" @click="dialog = true">扩充书籍</el-button>
    <el-drawer
  title="添加书籍"
  :before-close="cancelForm"
  :visible.sync="dialog"
  direction="rtl"
  custom-class="demo-drawer"
  ref="drawer"
  >
  <div class="addbookback"></div>
  <div class="demo-drawer__content">
    <form :action=rootname method="POST" role="form" enctype="multipart/form-data">
        <legend>书籍相关信息</legend>
        <div class="form-group">
          <label for="">书目分类：</label>
        <select name="m" required value="">
          <option v-for="item of titlebar" :key="item.titlename" :value="item.m">{{item.name}}</option>
          <!-- <option value="classify21">哲学、宗教</option>
          <option value="classify22">社会科学总论</option>
          <option value="classify04">政治、法律</option>
          <option value="classify19">军事</option>
          <option value="classify20">经济</option>
          <option value="classify18">文、科、教、体</option>
          <option value="classify13">语言、文字</option>
          <option value="classify16">文学</option>
          <option value="classify17">艺术</option>
          <option value="classify10">历史、地理</option>
          <option value="classify08">自然科学总论</option>
          <option value="classify09">数理科学和化学</option>
          <option value="classify15">天文学、地球科学</option>
          <option value="classify01">马列毛邓</option>
          <option value="classify07">生物科学</option>
          <option value="classify14">医药、卫生</option>
          <option value="classify06">农业科学</option>
          <option value="classify05">工业技术</option>
          <option value="classify11">交通运输</option>
          <option value="classify03">航空、航天</option>
          <option value="classify02">环境科学，安全科学</option>
          <option value="classify12">综合性图书</option> -->
        </select>
        </div>
        <div class="form-group">
            <label for="">书名:</label>
            <input required type="text" name="title" class="form-control" id="" placeholder="">
        </div>
        <div class="form-group">
            <label for="">作者:</label>
            <input required type="text" name="authors" class="form-control" id="" placeholder="">
        </div>
        <div class="form-group">
            <label for="">描述:</label>
            <textarea type="text" name="abstract" rows="5" cols="22" class="form-control" id="" placeholder="" />
        </div>
        <div class="form-group">
            <label for="">新书: </label>
            <input type="checkbox" name="news" class="form-control" id="" placeholder="">
        </div>
        <div class="form-group">
            <label for="">收藏: </label>
            <input type="checkbox" name="collected" class="form-control" id="" placeholder="">
        </div>
        <div class="form-group">
            <label for="">上传图片: </label>
            <input required type="file" name="file">
        </div>
        <div class="addbookbtn">
          <button type="submit" class="btn btn-primary">提交</button>
        <el-button @click="cancelForm">取 消</el-button>
        </div>
    </form>
  </div>
</el-drawer>
  </div>

    </div>
</template>
<script>
import Vue from 'vue';
import Fade from '../src/components/Fade'
import { Search,Toast,IndexBar, IndexAnchor,Cell } from 'vant';
Vue.use(Cell);
Vue.use(IndexBar);
Vue.use(IndexAnchor);
Vue.use(Search,Toast);
export default{
  components:{
    Fade
  },
  data(){
    return{
      value: '',  /* 搜索框输入的有效值 */
      active:0, /* 设置当前活动的导航项目动态添加current属性改变颜色 */
      leftpop:false,
      rightpop:false, /* 根据左右导航的弹出状态，点击时候另外一边的弹出状态消失 */
      activeNamesLeft:['0'],  /* 左导航首项 */
      activeNamesRight:['0'], /* 右导航首项，默认无 */
      radio: '1',  /* 搜索类型区分 1为本类搜索，2为全类搜索*/
      classorigin:'', /* 本类搜索判断 */
      classorigincontent:[],/* 本类搜索内容 */
      m:'',/* 通过路由地址显示数据库存储数据的名称 */
      /* 弹出式表单数据 */
      dialog: false,
      loading: false,
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      formLabelWidth: '80px',
      timer: null,
      /* 弹出式表单数据结束 */
      /* 表单post发送地址 */
      rootname:'',
      /* 表单post发送地址结束 */
      titlebarleft:[
        {ordername:'0',titlename:'A',iconfont:'iconfont icon-sixiangyinling',name:'马克思主义、列宁主义、毛泽东思想、邓小平理论',m:'classify01'},
        {titlename:'B',iconfont:'iconfont icon-B-zhexuezongjiao',name:'哲学、宗教',m:'classify21'},
        {titlename:'C',iconfont:'iconfont icon-drxx06',name:'社会科学总论',m:'classify22'},
        {titlename:'D',iconfont:'iconfont icon-D-zhengzhifalv',name:'政治、法律',m:'classify04'},
        {titlename:'E',iconfont:'iconfont icon-junshi',name:'军事',m:'classify19'},
        {titlename:'F',iconfont:'iconfont icon-jingji',name:'经济',m:'classify20'},
        {titlename:'G',iconfont:'iconfont icon-tiyu',name:'文化、科学、教育、体育',m:'classify18'},
        {titlename:'H',iconfont:'iconfont icon-wenzi',name:'语言、文字',m:'classify13'},
        {titlename:'I',iconfont:'iconfont icon-wenxue',name:'文学',m:'classify16'},
        {titlename:'J',iconfont:'iconfont icon-yishu',name:'艺术',m:'classify17'},
        {titlename:'K',iconfont:'iconfont icon-dilixueboshi',name:'历史、地理',m:'classify10'},
      ],
      titlebarright:[
        {ordername:'0',titlename:'N',iconfont:'iconfont icon-ziran-',name:'自然科学总论',m:'classify08'},
        {titlename:'O',iconfont:'iconfont icon-physics-world',name:'数理科学和化学',m:'classify09'},
        {titlename:'P',iconfont:'iconfont icon-wangyuanjing',name:'天文学、地球科学',m:'classify15'},
        {titlename:'Q',iconfont:'iconfont icon-shengwuzhiyao',name:'生物科学',m:'classify07'},
        {titlename:'R',iconfont:'iconfont icon-yiyaoxiang',name:'医药、卫生',m:'classify14'},
        {titlename:'S',iconfont:'iconfont icon-sannong',name:'农业科学',m:'classify06'},
        {titlename:'T',iconfont:'iconfont icon-gongyede-',name:'工业技术',m:'classify05'},
        {titlename:'U',iconfont:'iconfont icon-jiaotongyunshu',name:'交通运输',m:'classify11'},
        {titlename:'V',iconfont:'iconfont icon-hangkonghangtian',name:'航空、航天',m:'classify03'},
        {titlename:'X',iconfont:'iconfont icon-huanjing',name:'环境科学，安全科学',m:'classify02'},
        {titlename:'Z',iconfont:'iconfont icon-Z-zonghexing',name:'综合性图书',m:'classify12'},
      ],
      titlebar:[]
    }
  },
  mounted(){
    var pathname= window.location.pathname
    if(pathname=='/search'){
      this.radio = '2';
    }
    var titlebar = []
    titlebar.push(...this.titlebarleft)
    titlebar.push(...this.titlebarright)
    this.titlebar = titlebar;
    var hostname = window.location.hostname;
    this.rootname =`http://${hostname}:7001/doAdd`
  },
  methods:{
    handleCenter(){
      this.$router.push('/center')
    },
handleClose(done) {
      if (this.loading) {
        return;
      }
      this.$confirm('确定要提交表单吗？')
        .then(() => {
          this.loading = true;
          this.timer = setTimeout(() => {
            done();
            // 动画关闭需要一定的时间
            setTimeout(() => {
              this.loading = false;
            }, 400);
          }, 2000);
        })
        .catch(() => {});
    },
    cancelForm() {
      this.loading = false;
      this.dialog = false;
      clearTimeout(this.timer);
    },
    onSearch(val) { /* 搜索时进行的操作 */
      if(this.radio=="1"){
        var m = this.$route.name;
        this.$router.push(`/search?m=${m}&keyword=${val}`)
        location.reload();
      }else{
        this.$router.push(`/search?keyword=${val}`)
      location.reload();
      }
    },
    onCancel() {  /* 取消时进行的操作 */
      Toast('取消');
    },
    handleleft(index,val){
      this.active = index;
      this.rightpop = true;
      this.leftpop = false;
      this.$refs.changeright.forEach(item=>{
      if(item.nextSibling.classList.value=='el-collapse-item__arrow el-icon-arrow-right is-active'){
      item.nextSibling.classList.value = 'el-collapse-item__arrow el-icon-arrow-right'
      }
      })
      this.$router.push(`/books/${val}`)

    },
    handleright(index,val){
      // console.log(index,val)
      this.active =index + 11;
      this.leftpop  = true;
      this.rightpop = false;
      this.$refs.changeleft.forEach(item=>{
        if(item.nextSibling.classList.value=='el-collapse-item__arrow el-icon-arrow-right is-active'){
      item.nextSibling.classList.value = 'el-collapse-item__arrow el-icon-arrow-right'
        }
      })
this.$router.push(`/books/${val}`)
      // if(index==10){
      //   console.log(this.$refs.circleright.lastChild)
      // }
    },
    handleLogout(){
      this.$http.post('/logout').then(res=>{
        var msg = res.data.msg
        this.$message({
          message:msg,
          type:'error',
          duration:1000
        })
        this.$router.push('/')
      })
    },
  }
}
</script>
<style >
body{/* 设置app整体背景大小，不显示滚动条 */
  overflow:hidden;
  background: url('../src/assets/pic5.jpg')no-repeat;
  background-size:100% 100%;
  background-repeat: no-repeat;
}
/* 标题栏加搜索栏开始 */
.titleAsearch{  /* 外框结构 */
background: rgba(255, 248, 220, 0.616);
  width: 100%;
  height: 100px;
  display: grid;
  grid-template-columns:2fr 4fr 1fr 1fr;
  align-items: center;
  justify-items: center;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}
.titleAsearch>div{
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.titleAsearch>div:nth-child(1){
  display: flex;
  flex-direction: column;
  align-items: center;
}
.titleAsearch>div:nth-child(1)>p:nth-child(2){
  margin:0 0 3px 30px;
  font-family:sans-serif;
  font-weight: bold;
  font-size: 15px;
}
.title{
  font-size: 50px !important;
  font-weight: bolder;
  margin-bottom: 0;
  margin-right:100px;
}
.van-search{  /* search */
border-radius: 10px;
background:rgba(151, 151, 151, 0.658) !important;
box-shadow: 0px 0px 5px 3px hsla(0,0%,100%,.5);
}
.van-search__content{
background:hsla(0,0%,100%,.7);

}
.searchclass{ /* 搜索分类 */
  padding: 0 10px;
  height: 70px;
  border-radius: 10px;
  border:13px solid rgba(151, 151, 151, 0.836);
  display: flex;
  flex-direction: column;
  row-gap: 5px;
  align-items: center;
  justify-content: center;
  background: hsla(0,0%,100%,.7);
  box-shadow: 0px 0px 5px 3px hsla(0,0%,100%,.5);
}
.searchclass>.el-radio{
  margin: 0;
}
.searchclass>.el-radio>.el-radio__label{
  font-weight: bold;
  font-family:fantasy;
}
.searchclass>.is-focus{
  color: #1a0033 !important;
}
.van-search .van-cell{
  width: 500px;
  height: 50px;
  font-size: 20px;
}
.van-icon-search{
  font-size: 25px !important;
  margin-top: 3px;
  border-radius: 10px !important;
}
.van-cell{
  line-height: 40px;
  border-radius: 10px;
}
/* .classorigin>.van-index-bar>.van-cell{
  width: 600px;
} */
.icon-jurassic_admin{/* 图标管理中心 */
  font-size: 18px !important;
  font-weight: bold !important;
}
.managecenter>button{
margin-left: 70px;
}
.icon-tuichudenglu{/* 退出登录 */
  font-size: 18px !important;
  font-weight: bold !important;
}
/* 标题栏加搜索栏结束 */

/* 导航栏当前选中样式开始 */
.current{
  color:ivory;
  /* text-align: center; */
}
/* 导航栏当前选中样式结束 */

/* 导航栏字体图标开始 */
.iconfont{
  font-size: 30px;
}
/* 导航栏字体图标结束 */

/* 登录界面背景图片开始 */
/* .centerRoute{ */
    /* width:100%;
    height: 100%;
    position: absolute;
    top: 50%;
    left:50%;
    transform: translate(-50%,-50%);
    background: url('./assets/pic1.jpg'); */
/* } */
/* 登录界面背景图片结束 */

/* 导航外框开始 */
/* .contentAtitle{
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  align-items: center;
  justify-items: center;
  display: flex;
  padding: 20px;
} */
/* 导航外框结束 */

/* 导航左开始 */
.leftbar{
  justify-self:flex-start;
  position: fixed;
  left: 20px;
  top: 180px;
}
.leftbar>div{
  border-radius: 10px;
}
.leftbar>div:nth-child(1)>div:nth-child(1)>div:nth-child(1)>div:nth-child(1){
  /* 设置左侧导航圆角(顶部) */
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

}
.leftbar>div>div:nth-child(1)>div:nth-child(1)>div:nth-child(1){/* 导航透明色图标区 */
background:hsla(0,0%,100%,.5);
box-shadow: 0px 0px 5px 8px hsla(0,0%,100%,.5);
}
.leftbar>div>div:nth-child(1)>div:nth-child(2){ /* 导航透明色文字区 */
  background:hsla(0,0%,100%,.5);
  box-shadow: 0px 0px 5px 5px hsla(0,0%,100%,.5);
}
.leftbar>div:nth-last-child(1)>div:nth-child(1)>div:nth-child(1)>div:nth-child(1){
  /* 设置左侧导航圆角(底部) */
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}
.leftbar>div:nth-last-child(1)>div:nth-child(1)>div:nth-child(2){
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}
.activebarleft{
  /* 样式修复，10px->2px */
  border-top:2px solid transparent !important;
  border-bottom: 1px solid transparent !important;
}
.leftbaritem{
  /* 样式修复，设置左侧导航item的宽度方便结构设计 */
  width:264px;
}
.titleoutleft{
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2,1fr);
  padding: 0 10px;
  align-items: center;
  justify-items: center;
  font-weight: bold;
}
.titlenameleft{
  font-size: 20px;
  -webkit-user-select:none;
  -moz-user-select:none;
  -ms-user-select:none;
  user-select:none;
}
.titlefontleft{
  text-align: center;
  font-weight: bold;
  font-size: 20px;
  margin-right: 20px;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}
.leftbaritem>div:nth-child(2)>div{/* 样式修复 */
  padding: 0;
}
/* 导航左结束 */

/* 导航右开始 */
.rightbar{
  justify-self: flex-end;
  position: fixed;
  right: 20px;
  top: 180px;
}
.rightbar>div:nth-child(1)>div:nth-child(1)>div:nth-child(1)>div:nth-child(1){
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
.rightbar>div:nth-last-child(1)>div:nth-child(1)>div:nth-child(1)>div:nth-child(1){
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}
.rightbar>div:nth-last-child(1)>div:nth-child(1)>div:nth-child(2){
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}
.rightbar>div>div:nth-child(1)>div:nth-child(1)>div:nth-child(1){/* 导航透明色图标区 */
background:hsla(0,0%,100%,.5);
box-shadow: 0px 0px 5px 8px hsla(0,0%,100%,.5);
}
.rightbar>div>div:nth-child(1)>div:nth-child(2){ /* 导航透明色文字区 */
  background:hsla(0,0%,100%,.5);
  box-shadow: 0px 0px 5px 5px hsla(0,0%,100%,.5);
}
.activebarright{
  border-top:2px solid transparent !important;
  border-bottom: 1px solid transparent !important;
}
.rightbaritem{
  width:264px;
  /* margin-bottom: 0 !important; */
}
.rightbaritem>div:nth-child(1)>div:nth-child(1){
  position: relative;
}
.rightbaritem>div:nth-child(1)>div:nth-child(1)>i{
  position: absolute;
  left: 10px;
  top: 50%;
  transform:translate(0,-50%) rotate(180deg);
}
.rightbaritem>div:nth-child(2)>div{
  padding: 0;
}
.rightbaritem>div:nth-child(1)>div:nth-child(1)>i.is-active{
transform: rotate(90deg);
}
.titleoutright{
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2,1fr);
  padding: 0 10px;
  align-items: center;
  justify-items: center;
  font-weight: bold;
}
.titlenameright{
  font-size: 20px;
  margin-left: 25px;
  -webkit-user-select:none;
  -moz-user-select:none;
  -ms-user-select:none;
  user-select:none;
}
.titlefontright{
  text-align: center;
  font-weight: bold;
  font-size: 20px;
  margin-right: 20px;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}
/* 导航右结束 */

.fonthide{
  display: none;  /* 作用：当点击左右其中一边导航栏时，通过控制lefttop和righttop使另一边的图书分类名称隐藏 */
}
.navcircle{/* 修复左右导航最后一个item打开弹出名称时，圆角与平角相接问题 */
  border-bottom-left-radius: 0 !important;
  border-bottom-right-radius: 0 !important;
}
/* 左右公用样式结束 */

/* 路由区样式router-view开始 */
.appcontent{
  margin-top: 70px;
  margin-left: auto;
  margin-right: auto;
  width: 1200px;
}
/* 路由区样式router-view结束 */

/* 添加图书样式开始 */
.addbook>.el-button--primary{/* 扩充书籍基础样式 */
  /* margin-left:1500px; */
  right: 20px;
  font-size: 25px;
  border: none !important;
  box-shadow: 0px 0px 5px 5px hsla(0,0%,100%,.5);
  font-weight: bold;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  position: fixed;
  top: 840px;
  width: 150px;
  height: 50px;
  background-color: hsla(0,0%,100%,.5) !important;
}
.addbook>.el-button--primary:hover{/* 扩充书籍悬停时效果 */
  color: greenyellow;
  background-color: transparent !important;
}
.demo-drawer__content>form{/* 表单框设计 */
  z-index:120;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  text-align: center;
}
.demo-drawer__content>form>div{/* 总体字体大小 */
  font-size: 30px;
}
.demo-drawer__content>form>div>select{/* 下拉选项组样式 */
  outline: none;
  height: 40px;
  border-radius: 5px;
  font-size: 18px;
  font-weight: bold;
}
.demo-drawer__content>form>div>label{/* 总体标题框 */
  font-size: 20px;
}
.demo-drawer__content>form>div>input{/* 总体输入框 */
  height: 40px;
  border-radius: 5px;
  outline: none;
  border: none;
  margin-left: 15px;
}
.demo-drawer__content>form>div:nth-child(5)>textarea{
  margin-left: 15px;
  border-radius: 5px;
  outline: none;
  border: none;
}
.demo-drawer__content>form>div:nth-child(6)>input{/* 新书复选框 */
  width: 20px;
  height: 20px;
}
.demo-drawer__content>form>div:nth-child(7)>input{/* 收藏复选框 */
  width: 20px;
  height: 20px;
}
.addbook>.el-drawer__wrapper>.el-drawer__container>.el-drawer>#el-drawer__title>span{
  /* 添加书籍样式 */
  font-size: 30px;
  color: #fff;
}
.addbook>.el-drawer__wrapper>.el-drawer__container>.el-drawer{
  /* 整体外框的格式背景等 */
  /* background-color:hsla(0,0%,100%,.7) ; */
  background-color: transparent;
  border-radius: 50px;
  margin-right: 10px;
  box-shadow: 0 0 5px 5px hsla(0,0%,100%,.5);
}
.addbookbtn{  /* 提交和取消按钮的格式 */
  display: flex;
}
.btn-primary{ /* 扩充书籍内的提交按钮 */
  border-radius: 5px;
  width: 76px;
  height: 40.5px;
  margin-right: 15px;
  outline:none;
  border: none;
}
.btn-primary:hover{
  color:green;
  cursor: pointer;
  background-color: rgba(113, 252, 0, 0.856);
}
.el-dialog__close{/* 弹窗关闭按钮X */
  color:#000;
  font-size: 30px;
  margin-top: 20px;
}
.el-dialog__close:hover{
  color:#fff;
}
.addbookback{
  z-index: -1;
  width: 100%;
  height: 940px;
  background:hsla(0,0%,100%,.5);
  filter: blur(9px);
  top: 0px;
  position: absolute;
}
.demo-drawer__content>form>div{
  margin-top: 10px;
  font-size: 15px;
  font-weight: bold;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
}
.demo-drawer__content>form>legend{
  font-size: 40px;
  font-weight: bolder;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}

/* 添加图书样式结束 */
</style>