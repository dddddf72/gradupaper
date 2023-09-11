const request=require("superagent"); //const导入库，格式 const request=require("库名");
const cheerio=require("cheerio");
require("superagent-charset")(request);
async function run(){
    
    let url="https://movie.douban.com/top250";

    //1.抓取页面
    let res=await request.get(url).charset("utf-8");
    // console.log(res.text);

    //2.解析HTML页面
    const $=cheerio.load(res.text,{
        //设置不出现中文乱码问题
        decodeEntities:false
    })

    let items=$(".grid_view").find(".item");
    let arr=[];
   
  
        items.each(function(index,value){
        let pic = $(value).find(".pic img").attr("src");
        let title = $(value).find(".info .hd .title").html();
        let rating= $(value).find(".rating_num").html();
        let slogo =$(value).find(".quote .inq").html();
        let jianjie = $(value).find(".info .bd p").html();
        let comment=$(value).find(".info .bd .star>span:nth-child(4)").html();


        arr.push({
            pic:pic,
            title:title,
            raiting:rating,
            slogo:slogo,
            comment:comment,
            jianjie:jianjie
        })
    })
    return arr;


}

module.exports=run;