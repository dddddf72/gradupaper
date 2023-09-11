#HOST http://localhost:4000/

##get /api/article

##post /api/doCollect 实现文章页面的收藏
{id:"",collected:true/false}

##get /api/movie?m=top250 (get传值处理前端路由1)
                    inTheaters
                    comingSoon

##处理前端路由2
//get  /api/movie/:m    (动态路由)
    m = top250 || inTheaters || comingSoon
    router.get('/api/movie/:m',async ctx=?{})

##注释：//error nModified=0 success=1

##//post /api/collectMovie/:m    (用户表中的收藏)
m == top250 || inTheaters || comingSoon;
{
    id,
    collected:Boolean
}

##//get /api/history?id=1001&m=top250 (历史记录)

##//搜索
/api/search?keyword=""
var tables = [top250 || inThearters || comingSoon];
//模糊查询

##//电影详情，文章详情
/api/movieDetail?id=
/api/articleDetail?id=
