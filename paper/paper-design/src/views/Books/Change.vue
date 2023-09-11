<template>
    <div class="changeout">
        <p>修改该书籍的相关信息</p>
        <div class="changecenter">
        <img :src="prevresult.imgUrl" alt="">
        <form :action=rootname method="POST" role="form" enctype="multipart/form-data">
        <div class="form-group">
            <input type="hidden" :value="prevresult._id" name="id" class="form-control" id="" placeholder="">
        </div>
        <div class="form-group">
            <label for="">书名:</label>
            <input required type="text" :value="prevresult.title" name="title" class="form-control" id="" placeholder="">
        </div>
        <div class="form-group">
            <label for="">作者:</label>
            <input required type="text" :value="prevresult.authors" name="authors" class="form-control" id="" placeholder="">
        </div>
        <div class="form-group">
            <label for="">描述:</label>
            <textarea type="text" :value="prevresult.abstract" name="abstract" rows="5" cols="22" class="form-control" id="" placeholder="" />
            <!-- <input type="text"  name="abstract" class="form-control" id="" placeholder=""> -->
        </div>
        <div class="form-group">
            <label for="">新书:</label>
            <input type="checkbox" :checked="prevresult.news" name="news" class="form-control" id="" placeholder="">
        </div>
        <div class="form-group">
            <label for="">收藏:</label>
            <input type="checkbox" :checked="prevresult.collected" name="collected" class="form-control" id="" placeholder="">
        </div>
        <div class="form-group">
            <label for="">修改图片:</label>
            <input required type="file" name="file">
        </div>
        <button type="submit" class="btn btn-primary">提交修改</button>
    </form>
    </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                rootname:'',
                prevresult:''
            }
        },
        mounted(){
            console.log(window.location.hostname)
            var hostname = window. location.hostname;
            this.rootname = `http://${hostname}:7001/change`
            var {id}=this.$route.query;
            this.$http.get(`/bookDetail?id=${id}`).then(res=>{
                // console.log(res.data.res)
                var result = res.data.res
                result.forEach(item=>{
                    this.prevresult = item;
                })
                console.log(this.prevresult)
                console.log(this.prevresult._id)
            })
        }
    }
</script>

<style scoped>
.changeout{
    text-align: center;
}
.changecenter{
    /* margin-top: -30px; */
    display: grid;
    margin-top: -20px;
    grid-template-columns: repeat(2,1fr);
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

.changecenter>img{
    width: 300px;
    height: 400px;
    justify-self: end;
    margin-right: 30px;
}
.changecenter>form{
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 20px;
    justify-self: start;
    font-size: 18px;
    font-weight: bold;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}
.changecenter>form>button{
    width: 120px;
    height: 40px;
    margin:10px 0 0 0;
}
.changecenter>form>div{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
}

.changecenter>form>div:nth-child(7)>input{
    /* width: 200px; */
    width: 100px;
}
.changecenter>form>div>input{
    height: 40px;
    border: none;
    outline: none;
    border-radius: 5px;
    margin-left: 15px;
}
.changecenter>form>div>label{
    font-size:20px;
    font-weight:bold;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}
.changecenter>form>div:nth-child(4)>textarea{
    border-radius: 5px;
    outline: none;
    border: none;
    margin-left: 15px;
}
.changecenter>form>div:nth-child(5)>input{
    width: 20px;
    height: 20px;
}
.changecenter>form>div:nth-child(6)>input{
    width: 20px;
    height: 20px;
}
.changecenter>form>div:nth-child(7)>input{
    width: 180px;
    height: 50px;
    margin-top: 15px;
}
.changecenter>form>div:nth-child(7){
    display: grid;
    grid-template-columns: 1fr 2fr;
}
.changeout>p{
    font-size: 25px;
    font-weight: bolder;
    margin-top: -10px;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}
</style>