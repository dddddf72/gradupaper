<template>
    <div class="centerout">
        <p class="centertitle">管理中心</p>
        <div class="centermanage">
    <el-tabs :tab-position="tabPosition">
    <el-tab-pane label="藏书管理">
<div class="centercontent">
    <div v-for="item of collectresult" :key="item._id">
        <div class="centermsg" >
            <img @click="handleToggle(item._id)" v-lazy="item.imgUrl" alt="">
            <span>{{item.title | handleStr}}</span>
            <span>{{item.authors | handleStr}}</span>
            <div class="centerbtn">
                <!-- <el-button type="primary" @click="jumpChange(item._id)" icon="el-icon-edit" circle></el-button> -->
                <el-button type="danger" @click="deleteitem(item._id,1)" icon="el-icon-delete" circle></el-button>
            </div>
        </div>
    </div>
</div>
    </el-tab-pane>
    <el-tab-pane label="新书管理">
        <div class="centercontent">
    <div v-for="item of newresult" :key="item._id">
        <div class="centermsg" >
            <img @click="handleToggle(item._id)" v-lazy="item.imgUrl" alt="">
            <span>{{item.title | handleStr}}</span>
            <span>{{item.authors | handleStr}}</span>
            <div class="centerbtn">
                <!-- <el-button type="primary" @click="jumpChange(item._id)" icon="el-icon-edit" circle></el-button> -->
                <el-button type="danger" @click="deleteitem(item._id,2)" icon="el-icon-delete" circle></el-button>
            </div>
        </div>
    </div>
</div>
    </el-tab-pane>
    </el-tabs>

    </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                tabPosition:'left',
                collectresult:[],
                newresult:[]
            }
        },
        mounted(){
            this.$http.get('/getCollect').then(res=>{
                this.collectresult = res.data.res[0].collected
            })
            this.$http.get('/getNews').then(res=>{
                this.newresult = res.data.res[0].news
            })
        },
        methods:{
            jumpChange(val){
                console.log(val)

                this.$http.get(`/bookDetail?id=${val}`).then(res=>{
                    console.log(res.data.m)
                })
            },
            handleToggle(val){
                this.$router.push(`/books/detail?id=${val}`)
            },
            deleteitem(val,num){
                if(num==1){
                    this.$confirm('此操作将取消收藏此图书, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
    }).then(() => {
            this.$http.post('/cancel',{id:val})
            setTimeout(() => {
                this.$http.get('/getCollect').then(res=>{
                        this.collectresult = res.data.res[0].collected;
                    })
            }, 2000);

            }).catch(() => {
        this.$message({
        type: 'info',
        duration:800,
        message: '已取消'
        });
        });
        }
        else{
            this.$confirm('此操作将使该书不再作为新书, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
    }).then(() => {
            this.$http.post('/cancelNews',{id:val})
            setTimeout(() => {
                this.$http.get('/getNews').then(res=>{
                        this.newresult = res.data.res[0].news;
                        console.log(this.newresult)
                    })
            }, 2000);
            }).catch(() => {
        this.$message({
        type: 'info',
        duration:800,
        message: '已取消'
        });
        });
                }

            }
        }
    }
</script>

<style>
.centerout{
    text-align: center;
}
.centercontent>div{
    height: 300px;
}
.centermanage{
    /* margin-top: -30px; */
    margin-top: -20px;
    align-items: center;
    text-align: center;
    width: 1200px;
    height: 650px;
    background:hsla(0,0%,100%,.5);
    border-radius: 10px;
    box-sizing: border-box;
    border-bottom: 34px solid transparent;
    border-top: 1px solid #eddd9e;
    box-shadow: 0px -50px 10px 5px hsla(0,0%,100%,.7);
}
.centermanage>img{
    width: 300px;
    height: 400px;
    justify-self: end;
    margin-right: 30px;
}
.centertitle{
    font-size: 25px;
    font-weight: bolder;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}
.centercontent{
    display: grid;
    grid-template-columns: repeat(5,1fr);
    align-items: center;
    justify-items: center;
    margin-top: 50px;
    border-radius: 10px;
}
.centercontent img{
    width: 120px;
    height: 180px;
}
.centermsg{
    width: 180px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background:rgba(119, 116, 116, 0.473);
    border-radius: 10px;
    padding:0  10px;
    margin-top: -30px;
    transition: transform 2s;
}
.centermsg:hover{
    cursor: pointer;
    transform:translateY(-10px);
    box-shadow: 0 0 3px 4px rgba(51, 51, 51, 0.479);
}
.centermsg>span{
    font-family:fantasy;
    color: ivory;
}
.centerbtn{   /* 按钮组，修改，删除 */
    display: grid;
    width: 100%;
    grid-template-columns: repeat(2,1fr);
    align-items: end;
    padding-bottom: 5px;
}
.centerbtn>:nth-child(1){
    justify-self: start;
    background: hsla(0,0%,100%,.2);
    border: none;
}
.centerbtn>:nth-child(1):hover{
    background: hsla(0,0%,100%,.5);
}
.centerbtn>:nth-child(2){
    background: hsla(0,0%,100%,.2);
    border: none;
}
.centerbtn>:nth-child(2):hover{
    background: hsla(0,0%,100%,.5);
}
.centerbtn>:nth-child(2){
    justify-self: end;
}
.centermanage>.el-tabs--left{
    height: 600px !important;
}
.centermanage>.el-tabs--left>.el-tabs__content{
    height: 600px !important;
}
.centermanage>.el-tabs--left>.el-tabs__header>.el-tabs__nav-wrap::after{
background-color: #000 !important;
}
.centermanage>.el-tabs>.el-tabs__header>.el-tabs__nav-wrap>.el-tabs__nav-scroll>.el-tabs__nav>.is-active{
    color: aliceblue !important;
}
.centermanage>.el-tabs>.el-tabs__header>.el-tabs__nav-wrap>.el-tabs__nav-scroll>.el-tabs__nav>.el-tabs__item{
    font-size: 25px;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-weight: bold;
}
.centermanage>.el-tabs>.el-tabs__header>.el-tabs__nav-wrap>.el-tabs__nav-scroll>.el-tabs__nav>.el-tabs__item:hover{
    color: aliceblue;
}
.el-tabs__active-bar{
    background-color: aliceblue;
}
</style>