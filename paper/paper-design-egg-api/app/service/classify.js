// app/service/user.js
const Service = require('egg').Service;
class ClassifyService extends Service {
    async find({m,start,limit}) {
        if (start == undefined) {
            start=0
        }
        // 书本显示十二条数据
        if (limit == undefined) {
            limit=12
        }
        var total = await this.app.bookmodel(m).find().count();
        var data = await this.app.bookmodel(m).find().sort({_id:-1}).skip(Number(start)).limit(Number(limit));
        return {data,total}
    }
    // 书本详情
    async bookDetail(id) {
        var m = [];
        for (let i = 1; i < 23; i++){
            if (i < 10) {
                var s = 'classify' + '0' + i;
                m.push(s)
            } else {
            var d ='classify'+i
            m.push(d)
        }
        }
        var detail = []
        for (let item of m) {
            var data = await this.app.bookmodel(item).find({ _id: id })
            detail.push(...data)
        }
        return {detail,m};
    }
    // 书本收藏
    async collect(id) {
        var res = await this.bookDetail(id)

        var nModi = []
        for (let item of res.m) {
            var collect = await this.app.bookmodel(item).updateOne({_id:id},{collected:true})
            if (collect.n) {
                nModi.push(collect)
            }
        }
        var str = await this.bookDetail(id)
        var items = str.detail[0]
        if (nModi[0].nModified) {
            await this.ctx.model.Center.updateOne({$push:{collected:items}})
        }
        return nModi;
    }
    // 书本添加为新书
    async addnews(id) {
        var res = await this.bookDetail(id)

        var nModi = []
        for (let item of res.m) {
            var collect = await this.app.bookmodel(item).updateOne({_id:id},{news:true})
            if (collect.n) {
                nModi.push(collect)
            }
        }
        var str = await this.bookDetail(id)
        var items = str.detail[0]
        if (nModi[0].nModified) {
            await this.ctx.model.Center.updateOne({$push:{news:items}})
        }
        return nModi;
    }
    // 书本取消收藏
    async cancel(id) {
        var res = await this.bookDetail(id)
        var nModi = []
        for (let item of res.m) {
            var collect = await this.app.bookmodel(item).updateOne({_id:id},{collected:false})
            if (collect.n) {
                nModi.push(collect)
            }
        }
        if (nModi[0].nModified) {
            await this.ctx.model.Center.updateOne({},{ $pull: {collected:{_id: id} } })
        }
        return nModi;
    }
    // 书本取消添加新书
    async cancelnews(id) {
        var res = await this.bookDetail(id) //取得全部m字段res.m
        var nModi = []
        for (let item of res.m) {
            var collect = await this.app.bookmodel(item).updateOne({_id:id},{news:false})
            if (collect.n) {
                nModi.push(collect)
            }
        }
        if (nModi[0].nModified) {
            await this.ctx.model.Center.updateOne({},{ $pull: {news:{_id: id} } })
        }
        return nModi;
    }
    // 添加书本项
    async doAdd(val) {
        var m = val.m
        var res = new this.app.bookmodel(m).insertMany({
            title: val.title,
            authors: val.authors,
            imgUrl:val.imgUrl,
            abstract: val.abstract,
            collected: Boolean(val.collected),
            news:Boolean(val.news)
        })
    }
    // 移除书本项
    async delete(id) {
        console.log(id)
        var m = [];
        for (let i = 1; i < 23; i++){
            if (i < 10) {
                var s = 'classify' + '0' + i;
                m.push(s)
            } else {
            var d ='classify'+i
            m.push(d)
            }
        }
        var res = '';
        try {
            for (let item of m) {
                await this.app.bookmodel(item).deleteOne({ _id: id })
            }
            res = true
            return res;
        }
        catch (err) {
            res = false;
            return res;
        }
    }
    // 修改书本项
    async change(val) {
        var res = await this.bookDetail(val.id)
        var nModi = []
        for (let item of res.m) {
            var collect = await this.app.bookmodel(item).updateOne({ _id: val.id },
                {
                    collected: Boolean(val.collected), news: Boolean(val.news), title: val.title, authors: val.authors,
                abstract:val.abstract,imgUrl:val.imgUrl})
            if (collect.n) {
                nModi.push(collect)
            }
        }
        return nModi;
    }
    // 书本关键字搜索
    async search(val,m2) {
        var m = [];
        for (let i = 1; i < 23; i++){
            if (i < 10) {
                var s = 'classify' + '0' + i;
                m.push(s)
            } else {
            var d ='classify'+i
            m.push(d)
            }
        }
        var reg = new RegExp(val)
        var detail ={}
        for (let item of m) {
            var data = await this.app.bookmodel(item).find({ title: { $regex: reg } })
            if (data != "") {
                detail[item]=data
            }
        }
        if (m2) {
            var detail2 = await this.app.bookmodel(m2).find({title:{$regex:reg}})
        }
        return {detail,detail2};
    }
    // 书本访问历史记录
    async history(id,m) {
        console.log(id, m)
        var data = await this.bookDetail(id)
        var item = data.detail[0]
        var str = ''
        var isCollect = await this.ctx.model.Center.find({"history._id":id})
        console.log(isCollect)
        if (isCollect.length == 0) {
            await this.ctx.model.Center.updateOne({$push:{history:item}})
            str = true;
        } else {
            str = false;
        }
        return str;
    }
    // 获取书本访问记录
    async getHistory() {
        var data = await this.ctx.model.Center.find({},{history:1})
        return data;
    }
    // 获取书本收藏记录
    async getCollect() {
        var m = [];
        for (let i = 1; i < 23; i++){
            if (i < 10) {
                var s = 'classify' + '0' + i;
                m.push(s)
            } else {
            var d ='classify'+i
            m.push(d)
            }
        }
        var newsresult = await this.ctx.model.Center.find({},{collected:1})
        var ids = []
            newsresult.forEach(item => {
                item.collected.forEach(item => {
                    ids.push(item._id.toString())
                })
            })

        var trueid=[]
        for (let item of m) {
            var allresult = await this.app.bookmodel(item).find({ collected: true })
            if (allresult!="") {
                allresult.forEach(item => {
                    var id = item._id.toString();
                    trueid.push(id)
                })
            }
        }
        function getArrDifference(arr1, arr2) { /* 取两个数组中不存在的值(id值) */
            return arr1.concat(arr2).filter(function(v, i, arr) {
                return arr.indexOf(v) === arr.lastIndexOf(v);
            });
        }
        var result = getArrDifference(trueid, ids)
        var itemneed = [];
        for (let i = 0; i < result.length; i++){
            /* 根据找到的不同的id值向书本详情接口发出请求，取得未加入新书库的数据 */
            var items = await this.bookDetail(result[i])
            itemneed.push(...items.detail)
        }
        if (itemneed) {
            for (let i = 0; i < itemneed.length; i++){
                /* 根据取得的不同的数据对新书库发起更新请求,将多条不同项循环更新 */
                await this.ctx.model.Center.updateOne({},{$push:{collected:itemneed[i]}})
            }
        }
        var data = await this.ctx.model.Center.find({},{collected:1})
        return data;
    }
    // 获取新书记录
    async getNews() {
        var m = [];
        for (let i = 1; i < 23; i++){
            if (i < 10) {
                var s = 'classify' + '0' + i;
                m.push(s)
            } else {
            var d ='classify'+i
            m.push(d)
            }
        }
        var newsresult = await this.ctx.model.Center.find({},{news:1})
        var ids = []
        newsresult.forEach(item => {
            item.news.forEach(item => {
                ids.push(item._id.toString())
            })
        })
        var trueid=[]
        for (let item of m) {
            var allresult = await this.app.bookmodel(item).find({ news: true })
            if (allresult!="") {
                allresult.forEach(item => {
                    var id = item._id.toString();
                    trueid.push(id)
                })
            }
        }
        function getArrDifference(arr1, arr2) { /* 取两个数组中不存在的值(id值) */
            return arr1.concat(arr2).filter(function(v, i, arr) {
                return arr.indexOf(v) === arr.lastIndexOf(v);
            });
        }
        var result = getArrDifference(trueid, ids)
        var itemneed = [];
        for (let i = 0; i < result.length; i++){
            /* 根据找到的不同的id值向书本详情接口发出请求，取得未加入新书库的数据 */
            var items = await this.bookDetail(result[i])
            itemneed.push(...items.detail)
        }
        if (itemneed) {
            for (let i = 0; i < itemneed.length; i++){
                /* 根据取得的不同的数据对新书库发起更新请求,将多条不同项循环更新 */
                await this.ctx.model.Center.updateOne({},{$push:{news:itemneed[i]}})
            }
        }
        /* 查找新书库中的书籍数据 */
        var data = await this.ctx.model.Center.find({},{news:1})
        return data;
    }
}
module.exports = ClassifyService;