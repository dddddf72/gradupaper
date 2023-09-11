##3.collect

##routers/api/doCollect

##4.连接多个数据库(wechat,wechatmovie)

##5.操作movies库下三张一样的表
top250,inTheaters,comingSoon这三张表的字段完全一样
设置前端

##6.实现对user表中collects的收藏添加
###1.实现电影收藏状态切换
###2.实现对user表collects的添加
###3.Schema一定要和数据映射，实现取消收藏功能

##7.history
###get /api/history?m=article&id=1001;
###UserModel = require('..')
###MovieModel=
###ArticleModel =
###router.get('/api/history',async ctx=>{
    var {m,id}=ctx.query;
    var item;
    if(m=="article"){
        item = await ArticleModel.find({_id:id})
    }else if(m==...){
        item = await MovieModel.find({_id:id})
    }
    await UserModel.updateOne({},{$push:{history:item[0]}})
})

##8.搜索
mongoDB正则，title:{$regex:keyword}
js正则， var reg = new RegExp(keyword) ,方法2
var res = await MovieModel(item).find({title:reg})
//模糊查询

##9.电影，文章详情


