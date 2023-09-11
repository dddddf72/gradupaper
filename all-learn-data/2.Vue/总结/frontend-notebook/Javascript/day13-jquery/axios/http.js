var baseURL ="http://192.168.4.18:3000/"
function http({
    url,
    method="get",
    params={}
}){
    return axios({
        url,
        baseURL,
        method,
        params
    })
}