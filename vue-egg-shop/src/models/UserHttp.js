import Http from './Http';
class UserHttp extends Http{
    static addCart(id){
        return this.request({
            url:"/api/addCart",
            params:{
                id
            }
        })
    }
    static login({name,pass}){
        return this.request({
            url:"/api/login",
            method:"post",
            data:{
                name,
                pass
            }
        })
    }
    static logout(){
        return this.request({
            url:"/api/logout",
            method:"post"
        })
    }
    static getCartList(){
        return this.request({
            url:"/api/getCartList"
        })
    }
    static editCartList({id,productNum,checked}){
        return this.request({
            url:"/api/editCartList",
            method:"post",
            data:{
                id,
                productNum,
                checked
            }
        })
    }
    static deleteCart(id){
        return this.request({
            url:"/api/deleteCart",
            method:"post",
            data:{
                id
            }
        })
    }
    static setAllChecked(checked){
        return this.request({
            url:"/api/setAllChecked",
            method:"post",
            data:{
                checked
            }
        })
    }
}
export default UserHttp;