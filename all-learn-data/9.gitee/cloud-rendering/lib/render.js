window.onload = function () {
    var listUrl = "top/playlist?cat=华语";
    var bannerUrl  = "banner"
    /* 发送列表页的http */
    ajax({
        url:listUrl,
        success: res => {
            handleListHttpData(res)
        }
    })
    
    function handleListHttpData(res) {
        var { playlists } = res;
        var results = playlists;
        var musics = [];
        results.forEach(item => {
            
            var { name, coverImgUrl, playCount, id } = item;
            playCount = handleNum(playCount);
            musics.push({
                name,
                coverImgUrl,
                playCount,
                id
            })
        })
        musics.forEach((value,index)=>{
            value.name = value.name.slice(0,5)+"..."
            var template = `
                <a href="../html/detail.html?id=${value.id}">
                <div class="huayuPIC">
                <img src=${value.coverImgUrl} alt="">
                <div class="opcity">
                    <i class="iconfont icon-erji">${value.playCount}</i>
                    <em></em>
                    <i class="iconfont icon-bofang1" style="color: #ccc;"></i>
                </div>
                <p>${value.name}</p>
             </div>
             </a>
           `
           $(".huayucenter").append(template);
        })
        
    }

    /* banner发送http */
   ajax({
       url:bannerUrl,
       success:res=>{
           handleBannerHttpData(res)
       }
   })

   function handleBannerHttpData(res){
       var {banners} = res;
       console.log(banners)
       banners.forEach(item=>{
           var template = `
           <img src=${item.imageUrl}>
           `
           $('#list').append(template);
           $('.box1').append(template);
       })
   }
// ajax跳转结束

// change开始
var index = 0 ;
$("#next").click(function(){
    index++;
if(index>9){
index=0;
}
    // console.log(index)
    animate(index);
})

$("#prev").click(function(){
    index--;
    if(index<0){
index=9;
}
animate(index);
})

$("#btns span").click(function(){
    index = $(this).index();  
    animate(index);
})

function animate(index){
    $("#list img").eq(index).fadeIn().siblings().fadeOut();
    $("#btns span").eq(index).addClass("current").siblings().removeClass();

    // $("#listOut img").eq(index).fadeIn().siblings().fadeOut();
    $(".box1 img").eq(index).fadeIn().siblings().fadeOut();
    // $("#btns span").eq(index).addClass("current").siblings().removeClass()

}
var timeID=setInterval(function(){ $("#next").click(); },2800);
// 轮播图结束
    
        // $(".Blackbanner-center-item a").click(function(){
        //     $(this).addClass("currentbg").removeClass("currentbg1").siblings().removeClass("currentbg").addClass("currentbg1");
        // })
    
        $("#itemone").click(function(){
            $(".triangleone").show();
            $(".triangletwo").hide();
            $(".trianglethree").hide();
            $(".trianglefour").hide();
            $(".bannerTip").show();
            $(this).addClass("currentbg").siblings().removeClass("currentbg");

        })

        $("#itemtwo").click(function(){
            $(".triangleone").hide();
            $(".triangletwo").show();
            $(".trianglethree").hide();
            $(".trianglefour").hide();
            $(".bannerTip").hide();
            $(this).addClass("currentbg").siblings().removeClass("currentbg");
        })

        $("#itemthree").click(function(){
            $(".triangleone").hide();
            $(".triangletwo").hide();
            $(".trianglethree").show();
            $(".trianglefour").hide();
            $(".bannerTip").hide();
            $(this).addClass("currentbg").siblings().removeClass("currentbg");
        })

        $("#itemfour").click(function(){
            $(this).addClass("currentbg").siblings().removeClass("currentbg");
            $(".bannerTip").hide();
        })

        $("#itemfive").click(function(){
            $(this).addClass("currentbg").siblings().removeClass("currentbg");
            $(".bannerTip").hide();
        })

        $("#itemsix").click(function(){
            $(this).addClass("currentbg").siblings().removeClass("currentbg");
            $(".triangleone").hide();
            $(".triangletwo").hide();
            $(".trianglethree").hide();
            $(".trianglefour").show();
            $(".bannerTip").hide();
        })

        $(".bannerTip a").click(function(){
            $(this).addClass("bannerTipcurrent").siblings().removeClass("bannerTipcurrent");
        })

        $("#PicFirstmusic").mouseover(function(){
            $(this).css("color","white");
        })
        $("#PicFirstmusic").mouseout(function(){
            $(this).css("color","rgb(196,196,196)");
        })

        $("#PicFirstmusic1").mouseover(function(){
            $(this).css("color","white");
        })
        $("#PicFirstmusic1").mouseout(function(){
            $(this).css("color","rgb(196,196,196)");
        })

        $("#PicFirstmusic2").mouseover(function(){
            $(this).css("color","white");
        })
        $("#PicFirstmusic2").mouseout(function(){
            $(this).css("color","rgb(196,196,196)");
        })

        $("#PicFirstmusic3").mouseover(function(){
            $(this).css("color","white");
        })
        $("#PicFirstmusic3").mouseout(function(){
            $(this).css("color","rgb(196,196,196)");
        })

        $("#PicFirstmusic4").mouseover(function(){
            $(this).css("color","white");
        })
        $("#PicFirstmusic4").mouseout(function(){
            $(this).css("color","rgb(196,196,196)");
        })

        $("#PicFirstmusic5").mouseover(function(){
            $(this).css("color","white");
        })
        $("#PicFirstmusic5").mouseout(function(){
            $(this).css("color","rgb(196,196,196)");
        })

        $("#PicFirstmusic6").mouseover(function(){
            $(this).css("color","white");
        })
        $("#PicFirstmusic6").mouseout(function(){
            $(this).css("color","rgb(196,196,196)");
        })

        $("#PicFirstmusic7").mouseover(function(){
            $(this).css("color","white");
        })
        $("#PicFirstmusic7").mouseout(function(){
            $(this).css("color","rgb(196,196,196)");
        })

        $(window).scroll(function () {
        var scrollTop = $(window).scrollTop();
        if (scrollTop > 100) {
        $(".Top").show(300)
        } 
    else {
        $(".Top").hide(300)
    }
})

$(".Top").click(function(){
    $("html").animate({scrollTop:0})
})

$(".icon-jiesuo").click(function(){
    $(".icon-jiesuo").toggleClass("icon-suo")
    $(".volet").toggleClass("current")
        })
        // change结束







        // 搜索部分开始
       
        
        



        // 搜索部分结束

}


