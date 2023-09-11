const router = require('koa-router')()
const MovieModel = require('../../models/movie');
router.get('/api/search', async ctx => {
    var { keyword } = ctx.query;
    // var reg = new RegExp(keyword) ,方法2
    // var res = await MovieModel(item).find({title:reg})
    var tables = ["top250", "inTheaters", "comingSoon"]
    var searchMovies = [];
    for (var item of tables) {
        var res = await MovieModel(item).find({ title: { $regex: keyword } });
        searchMovies.push(...res);
        // console.log(searchMovies)
    }
    ctx.body = {
        code: 200,
        res: searchMovies,
        total: searchMovies.length,
        msg: '电影搜索的数据'
    }
    /*

    res:[
    top250:...,
    inThearters:...,
    comingSoon:...
    ]
    */
})
module.exports = router