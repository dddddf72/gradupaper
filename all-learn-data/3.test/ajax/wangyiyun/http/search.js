window.onload = function () {

    $("#btn").click(function () {
        
        $(".container").html("");
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
            var template = `
                    <div>
                        <img src=${item.blurPicUrl}>
                        <a href="#" class="title">${item.name}</a>
                        <p class="name">${item.artist.name}</p>
                    </div>
                `
            $(".container").append(template)
        })
    }
}

