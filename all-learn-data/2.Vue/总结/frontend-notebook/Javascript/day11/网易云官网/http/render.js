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
        var results = playlists.slice(0, 8);
        var musics = [];
        results.forEach(item => {
            var { name, coverImgUrl, playCount } = item;
            playCount = handleNum(playCount);
            musics.push({
                name,
                coverImgUrl,
                playCount
            })
        })
        musics.forEach((value,index)=>{
            var template = `
            <div>
                <img src=${value.coverImgUrl} alt="">
                <div class="opcity">
                    <i class="iconfont icon-erji"></i>
                    <em>${value.playCount}</em>
                    <a href="#"><i class="iconfont icon-bofang1" style="color: #ccc;"></i></a>
                </div>
                <p><a href="#">${value.name}</a></p>
             </div>
           `
           $(".hot-content").append(template);
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
       })
   }
}


