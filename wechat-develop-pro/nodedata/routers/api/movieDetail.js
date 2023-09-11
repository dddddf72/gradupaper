const router = require('koa-router')()
const MovieModel = require('../../models/movie');
router.get('/api/movieDetail', async ctx => {
    var { id } = ctx.query;
    var tables = ["top250", "inTheaters", "comingSoon"]
    var details = [];
    for (var item of tables) {
        var res = await MovieModel(item).find({ _id: id });
        details.push(...res);
    }
    ctx.body = {
        code: 200,
        res: details,
        total: details.length,
        msg: '电影详情'
    }
})
module.exports = router