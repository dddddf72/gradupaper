<template>
    <div>
        <p class="booktitle">{{m | handletitle}}</p>
<div class="bookcontent">
    <div v-for="item of result" :key="item._id">
        <div class="bookmsg" >
            <img @click="handleToggle(item._id)" v-lazy="item.imgUrl" alt="">
            <span>{{item.title | handleStr}}</span>
            <span>{{item.authors | handleStr}}</span>
            <div class="bookbtn">
                <el-button type="primary" @click="jumpChange(item._id)" icon="el-icon-edit" circle></el-button>
                <el-button type="danger" @click="deleteitem(item._id)" icon="el-icon-delete" circle></el-button>
            </div>
        </div>
    </div>
</div>

<!-- 分页栏开始 -->
<div class="bookblock">
    <el-pagination
    @current-change="handleCurrentChange(currentPage)"
    :current-page.sync="currentPage"
    :page-size='12'
    layout="total,prev, pager, next, jumper"
    :total="total">
</el-pagination>
</div>
<!-- 分页栏结束 -->
    </div>
</template>

<script>
    export default {
        props:{

        },
        data(){
            return {
                currentPage:1,
                result:[],
                m:'',
                total:0
            }
        },
        methods:{
            handleToggle(val){
                console.log(val)
                this.$router.push(`/books/detail?id=${val}`)
            },
            jumpChange(val){
                console.log(val)
                var m = this.$route.name;
                this.$router.push(`/books/change?id=${val}&m=${m}`)
            },
            handleCurrentChange(val){
                this.currentPage = val;
                var start = (this.currentPage-1)*12;
                var m = this.m;
                this.$http.get(`/find?m=${m}&start=${start}`).then(res=>{
                this.result = res.data.res;
                this.total = res.data.total;
            })
            },
            deleteitem(val){
                this.$confirm('此操作将永久删除此图书, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
    }).then(() => {
            this.$http.post('/delete',{id:val})
            setTimeout(() => {
                var start = (this.currentPage-1)*12;
                var m = this.$route.name;
                this.$http.get(`/find?m=${m}&start=${start}`).then(res=>{
                this.result = res.data.res
                this.total = res.data.total
        })
            }, 500);

            }).catch(() => {
        this.$message({
        type: 'info',
        duration:800,
        message: '已取消删除'
        });
        });
            }
        },
        mounted(){
            var start = (this.currentPage-1)*12;
            var m = this.$route.name;
            this.m = this.$route.name;
            this.$http.get(`/find?m=${m}&start=${start}`).then(res=>{
                this.result = res.data.res
                this.total = res.data.total
            })
        }
    }
</script>

<style>
/* 内容样式开始 */
.bookcontent{
    display: grid;
    grid-template-columns: repeat(6,1fr);
    align-items: center;
    justify-items: center;
    background:hsla(0,0%,100%,.5);
    border-radius: 10px;
    border-bottom: 34px solid transparent;
    border-top: 1px solid #eddd9e;
    box-shadow: 0px -50px 10px 5px hsla(0,0%,100%,.7);
}
.bookcontent img{
    width: 120px;
    height: 180px;
}
.booktitle{
    font-size: 25px;
    line-height: 2px;
    text-align: center;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-weight: bolder;
}
.bookmsg{
    width: 180px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background:rgba(119, 116, 116, 0.473);
    border-radius: 10px;
    padding:0  10px;
    margin-top: 30px;
    transition: transform 2s;
}
.bookmsg:hover{
    cursor: pointer;
    transform:translateY(-10px);
    box-shadow: 0 0 3px 4px rgba(51, 51, 51, 0.479);
}
.bookmsg>span{
    font-family:fantasy;
    color: ivory;
}
.bookbtn{   /* 按钮组，修改，删除 */
    display: grid;
    width: 100%;
    grid-template-columns: repeat(2,1fr);
    align-items: end;
    padding-bottom: 5px;
}
.bookbtn>:nth-child(1){
    justify-self: start;
    background: hsla(0,0%,100%,.2);
    border: none;
}
.bookbtn>:nth-child(1):hover{
    background: hsla(0,0%,100%,.5);
}
.bookbtn>:nth-child(2){
    background: hsla(0,0%,100%,.2);
    border: none;
}
.bookbtn>:nth-child(2):hover{
    background: hsla(0,0%,100%,.5);
}
.bookbtn>:nth-child(2){
    justify-self: end;
}
/* 内容样式结束 */

/* 分页栏样式开始 */
.active{
    color: #1a0033 !important;
}
.bookblock{
    text-align: center;
    padding-top: 36px;
    margin-right: 40px;
}
.bookblock>.el-pagination>.el-pager>li:hover{
    color: #1a0033;
}
.bookblock>.el-pagination>.el-pager>li{
    padding: 10px;
    color: ivory;
    background-color: hsla(0,0%,100%,.5) !important;
    width: 50px;
    height: 50px;
    font-size: 20px;
}
.bookblock>.el-pagination>.btn-prev{
    width: 50px;
    height: 50px;
    font-size: 20px;
    background-color: hsla(0,0%,100%,.5) !important;
}
.bookblock>.el-pagination>.btn-next{
    width: 50px;
    height: 50px;
    font-size: 20px;
    background-color: hsla(0,0%,100%,.5) !important;
}
.bookblock>.el-pagination>.btn-next>.el-icon-arrow-right:hover{
    color: #1a0033;
}
.bookblock>.el-pagination>.btn-next>.el-icon-arrow-right{
    color: ivory;
}
.bookblock>.el-pagination>.btn-prev>.el-icon-arrow-left:hover{
    color:#1a0033;
}
.bookblock>.el-pagination>.btn-prev>.el-icon-arrow-left{
    color: ivory;
}

.bookblock>.el-pagination>.el-pagination__total{
    padding: 10px;
    color: ivory;
    font-size: 20px;
}
.bookblock>.el-pagination>.el-pagination__jump{
    color: ivory;
    font-size: 20px;
}
.bookblock>.el-pagination>.el-pagination__jump>.el-pagination__editor>.el-input__inner{
    color: ivory;
    margin-left: -3px;
    width: 50px;
    height: 50px;
    font-size: 20px;
    background-color: hsla(0,0%,100%,.5) !important;
}
/* 分页栏样式结束 */
</style>