// app.js
App({
    onLaunch(){
        wx.setStorageSync('states', null)
    },
    globalData:{
        state:false
    }
})
