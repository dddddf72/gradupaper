const { httpcart } = require("../../models/http")
Page({
    data: {
        cart: []
    },
    onLoad: function () {
        httpcart({
            success: res => {
                var cart = res.data
                this.setData({
                    cart
                })
            }
        })
    },
    handleitem(attr, event) {
        let cart = this.data.cart;
        let id = event.currentTarget.dataset.id;
        let value = event.detail;
        var item = cart.find(item => item.id == id)
        item[attr] = value;
        this.setData({
            cart
        })
    },
    onchange(event) {
        this.handleitem("isSelected", event)
    },
    Count(event) {
        this.handleitem("productCount", event)
    },
    onSum(event) {
        let cart = this.data.cart;
        let value = event.detail;
        cart.forEach(item => {
            item.isSelected = value;
        })
        this.setData({
            cart
        })
    }

})