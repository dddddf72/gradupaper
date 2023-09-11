window.onload = function () {

    $("#btn").click(function () {
        $(".searchcenter").html("");
        var value = $("#input").val();
        var url = `search?keywords=${value}&type=10`;
        ajax({
            url,
            success: res => {
                handleData(res)
            }
        })
    })

    function handleData(res) {
        var albums = res.result.albums
        albums.forEach(item => {
            item.name = item.name.slice(0,5)+"..."
            var template = `
                    <div class="searchPIC">
                        <img src=${item.blurPicUrl}>
                        <p href="#" class="title">${item.name}</p>
                        <p class="name">${item.artist.name}</p>
                    </div>
                `
            $(".searchcenter").append(template)
        })
    }
}

