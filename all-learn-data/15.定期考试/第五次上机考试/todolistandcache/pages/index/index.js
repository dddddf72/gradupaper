// index.js
// 获取应用实例
const app = getApp()

Page({
    data: {
        result: ""
    },
    onLoad: function () {
        var result = wx.getStorageSync('result')
        if (result) {
            this.setData({
                result
            })
        } else {
            wx.setStorageSync('result', [])
        }
    },
    onsearch(event) {
        var value = event.detail;
        var result = wx.getStorageSync('result')
        var res = result.every(item => item.name != value);
        if (res && value.trim()) {
            result.push({
                name: value,
                state: false
            })
            wx.setStorageSync('result', result)
            this.setData({
                result
            })
        } else {
            wx.showToast({
                title: '数据已存在',
                icon: 'error'
            })
        }
    },
    onchange(event) {
        var value = event.detail;
        var result = wx.getStorageSync('result');
        var obj = result[event.currentTarget.dataset.index];
        obj.state = value;
        wx.setStorageSync('result', result)
        this.setData({
            result
        })
    },
    delete(event) {
        var name = event.currentTarget.dataset.name;
        var result = wx.getStorageSync('result')
        var res = result.filter(item => item.name != name)
        wx.setStorageSync('result', res)
        this.setData({
            result: res
        })
    }
})
