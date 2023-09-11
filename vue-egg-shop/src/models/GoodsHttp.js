import Http from './Http';
class GoodsHttp extends Http {
    // 获取首页的数据,分页
    static getPagination(offset=0) {
        return this.request({
            url: "/api/goods",
            params: {
                offset
            }
        })
    }
    /* 获取价格区间0-100 */
    static getPriceRange({min,max}) {
        return this.request({
            url: "/api/goods",
            params: {
                min,
                max
            }
        })
    }
    /* 价格升降序 */
    static getSortPrice(price) {
        this.request({
            url: "/api/sort",
            params: {
                price
            }
        })
    }
}
export default GoodsHttp;