// pages/city/city.js
const { http } = require("../../models/http")
const app = getApp();
Page({
    data: {
        location: "",
        visitedcities: [],
        result: [],
        lists: [],
        searchcities: [],
        value: ""
    },
    onLoad: function () {
        var location = wx.getStorageSync('locationCity')
        if (location) {
            this.setData({
                location
            })
        }

        // 访问过的城市
        var cities = wx.getStorageSync('cities')
        if (cities) {
            this.setData({
                visitedcities: cities
            })
        } else {
            wx.setStorageSync('cities', [])
        }

        // http请求
        http({ url: ":8000/city" }).then(res => {
            var result = res.data.data
            var lists = Object.keys(result.cities)
            this.setData({
                result,
                lists
            })
        })
    },
    handleclick(event) {
        var cities = wx.getStorageSync('cities');
        var name = event.currentTarget.dataset.name;
        if (!cities.includes(name)) {
            cities.unshift(name)
        }
        wx.setStorageSync('cities', cities.slice(0, 3))
        app.globalData.currentCity = name;
        wx.navigateBack();
    }
    ,
    handlecity(value) {
        var cities = this.data.result.cities;
        var arr = [];
        for (let key in cities) {
            cities[key].forEach(item => {
                if (item.name.includes(value) || item.spell.includes(value)) {
                    arr.push(item)
                }

            })

        }
        return arr;

    },
    onchange(event) {
        console.log(this.data.result.cities)
        var value = event.detail;
        var searchcities = this.handlecity(value);
        console.log(searchcities)
        this.setData({
            searchcities,
            value
        })
    }
})