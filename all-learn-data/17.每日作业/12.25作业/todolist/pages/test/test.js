// pages/test/test.js
Page({

    data: {
        arr: [
            { name: "html", id: "1001" },
            { name: "css", id: "1002" },
            { name: "javascript", id: "1003" }
        ]
    },
    onConfirm(event) {
        console.log(event.detail.value)
        var value = event.detail.value
        var arr = this.data.arr
        arr.unshift({
            name: value,
            id: 1004
        })
        console.log(arr)
        this.setData({
            arr
        })
    }

})