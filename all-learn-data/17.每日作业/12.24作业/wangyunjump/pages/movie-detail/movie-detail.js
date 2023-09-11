const { httpfeng, changeNum } = require("../../models/http")
Page({
    data: {
        result: "",
        jianjie: "",
        swiperParams: {
            defaultColor: "#ff2d51",
            dots: true,
            activeColor: "#aa4477"
        }
    },
    onLoad: function (options) {
        let { id } = options;
        // console.log(id)

        httpfeng({
            url: `subject/${id}`,
            success: res => {
                let result = res.data.result;

                result.forEach(item => {
                    item["ratingstar"] = changeNum(item.rating);
                    var jianjie = item.jianjie.replace(/[\n<br>]/g, "").trim().slice(0, 70) + "...";
                    item.play.forEach(value => {
                        if (value.pname.length > 6) {
                            value.pname = value.pname.slice(0, 6) + "..."
                        }
                        if (value.role.length > 6) {
                            value.role = value.role.slice(0, 6) + "..."
                        }

                    })
                    item["text"] = "展开";
                    item["value"] = "false";
                    this.setData({
                        result,
                        jianjie
                    })
                    console.log(this.data.result)
                })
            }
        })
    },
    clickopen(event) {
        var result = this.data.result;
        var value = event.currentTarget.dataset.value

        result.forEach(item => {
            var clickjianjie = item.jianjie.replace(/[\n<br>]/g, "").trim();
            item.value = !item.value;
            if (value) {
                item.text = "收起"
            } else {
                item.text = "展开"
                clickjianjie = item.jianjie.replace(/[\n<br>]/g, "").trim().slice(0, 70) + "...";
            }
            this.setData({
                result,
                jianjie: clickjianjie
            })
        })
    }
})