// const router = require('koa-router')()
// const MovieModel = require('../../models/movie')
// router.get('/api/movie', async ctx => {
//     try {
//         var { m } = ctx.query
//         if (data.length) {
//             var data = await MovieModel(m).find()
//             ctx.body = {
//                 code: 200,
//                 res: data,
//                 msg: m
//             }
//         } else {
//             throw new Error("参数无效")
//         }
//     }
//     catch (err) {
//         ctx.body = {
//             code: 400,
//             msg: '参数无效'
//         }
//     }
// })

// module.exports = router;
// 使用动态路由去处理前端路由
const router = require('koa-router')()
const MovieModel = require('../../models/movie')
router.get('/api/movie/:m', async ctx => {
    var { m } = ctx.request.params;
    // console.log(m)
    var data = await MovieModel(m).find()
    // console.log(data)
    if (data.length) {
        ctx.body = {
            code: 200,
            res: data,
            request: `请求成功${m}`
        }
    } else {
        ctx.body = {
            code: 400,
            request: '参数无效'
        }
    }
})
module.exports = router