Page({
    data:{
        play: "",
        playStates:true
    },

    onLoad:function(options){
        // 生命周期函数--监听页面加载
        var { id } = options;
        let imgUrl = wx.getStorageSync('url')
        getMusicPlayDetail(id).then(res => {
            let playUrl = res.data.data[0].url;
            audio.title = "hello";
            audio.src = playUrl;
            let states = wx.getStorageSync('states')
            if (states) {
                states[id] = true;
                for (let key in states) {
                    if (key != id) {
                        states[key] = false
                    }
                }
                wx.setStorageSync('states', states)
            } else {
                let states = {};
                states[id] = true;
                wx.setStorageSync('states', states)
            } this.setData({
                play:{id,imgUrl,playUrl}
            })
        })
    },
})