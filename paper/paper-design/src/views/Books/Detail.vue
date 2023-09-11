<template>

    <div class="Detailout">
        <p class="Detailtitle">{{prevresult.title}}</p>
        <div class="Detailcenter">
        <img v-lazy="prevresult.imgUrl" alt="">
        <div class="Detailmsg">

            <div class="clickicon">
                <img @click="clickchange(news,1,prevresult._id)" v-lazy="news?pic:pic2"  alt="">
                <img @click="clickchange(collected,2,prevresult._id)" v-lazy="collected?src:src2"  alt="">
            </div>

            <div>
                <p>作者：{{prevresult.authors}}</p>
                <p>描述：{{prevresult.abstract}}</p>
            </div>

        </div>
        </div>
        </div>
</template>

<script>
import axios from 'axios'
    export default {
        data(){
            return{
                rootname:'',
                prevresult:'',
                news:false,
                collected:'',
                src: require('../../assets/collectyellow.png'),
                src2:require('../../assets/collectgray.png'),
                pic:require('../../assets/newyellow.png'),
                pic2:require('../../assets/newgray.png')
            }
        },
        methods:{
            clickchange(val,num,id){
                // console.log(val,num,id)
                if(num==1){
                    val=!val;
                    this.news = val;
                    if(this.news){
                        axios({url:'http://124.70.164.225:7001/addNews',method:'post',data:{id}})
                    }else{
                        axios({url:'http://124.70.164.225:7001/cancelNews',method:'post',data:{id}})
                    }
                }
                else{
                    val=!val;
                    this.collected = val;
                    if(this.collected){
                        axios({url:'http://124.70.164.225:7001/collect',method:'post',data:{id}})
                    }else{
                        axios({url:'http://124.70.164.225:7001/cancel',method:'post',data:{id}})
                    }
                }
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
                    this.news = item.news;
                    this.collected = item.collected;
                })
                console.log(this.prevresult)
                console.log(this.prevresult._id)
            })
        }
    }
</script>

<style scoped>
.Detailcenter{
    /* margin-top: -30px; */
    display: grid;
    margin-top: -20px;
    grid-template-columns: 1fr 2fr;
    align-items: center;
    /* text-align: center; */
    width: 1200px;
    height: 650px;
    background:hsla(0,0%,100%,.5);
    border-radius: 10px;
    box-sizing: border-box;
    border-bottom: 34px solid transparent;
    border-top: 1px solid #eddd9e;
    box-shadow: 0px -50px 10px 5px hsla(0,0%,100%,.7);
}

.Detailcenter>img{
    width: 300px;
    height: 400px;
    justify-self: end;
    margin-right: 30px;
}
.Detailtitle{
    font-size: 25px;
    font-weight: bolder;
    text-align: center;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}
.Detailmsg{
    display: grid;
    grid-template-rows: repeat(2,1fr);
    align-items: center;
    font-size: 20px;
    font-weight: bold;
    color: aliceblue;
    padding:0 30px;
    margin-bottom: 99px;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}
.Detailmsg>p:nth-child(2){
    text-indent: 2em;
}
.clickicon{
    margin-left: 570px;
}
.clickicon>img{
    width: 50px;
    height:50px;
}
.clickicon>img:nth-child(2){
    margin-right: 20px;
    width: 70px;
    height: 70px;
}
</style>