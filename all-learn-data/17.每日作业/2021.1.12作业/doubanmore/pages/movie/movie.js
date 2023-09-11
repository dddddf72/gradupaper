// pages/movie/movie.js
const { nowplayhttp, wcominghttp, toptfzhttp } = require("../../models/http")
Page({
    data: {
        result: []
    },
    onLoad() {
        var list = {};
        var https = [nowplayhttp, wcominghttp, toptfzhttp];
        for (let value of https) {
            var res = await value();
            console.log(res)

        }
    }
})