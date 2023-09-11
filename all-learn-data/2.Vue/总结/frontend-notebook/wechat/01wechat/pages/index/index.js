Page({
    data: {
        msg: "hello world",
        isFocus: true,
        arr:[{
            name:"html"
        },{
            name:"css"
        }],
        /* 控制音乐播放的状态 */
        isPlay:false
    },
    handleClick() {
        this.setData({
            msg: "change"
        })
    },
    handleSubmit(event) {
        console.log(event.detail.value)
    },
    handleMusic(){
        // this.data.attr  可以获取data中的值
        // console.log(this.data.isPlay)
        // if(this.data.isPlay){
        //     this.setData({
        //         isPlay:false
        //     })
        // }else{
        //     this.setData({
        //         isPlay:true
        //     })
        // }
        
        this.setData({
            isPlay:!this.data.isPlay
        })
    }
})
