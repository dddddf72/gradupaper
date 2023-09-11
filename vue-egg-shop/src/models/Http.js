import axios from 'axios';
axios.defaults.baseURL = "http://192.168.4.18:7001"
axios.defaults.withCredentials = true;
// 添加请求拦截器
import store from '../store/index.js'
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    store.state.isLoading = true;
    return config;
});
// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    store.state.isLoading = false
    return response;
    
});
class Http {
    static request({url,method="get",data={},params}){
        return axios({
            url,
            method,
            data,
            params
        })
    }
}
export default Http;