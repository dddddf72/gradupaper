import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueCookie from 'vue-cookie';
import '../assets/css/reset.css'
Vue.use(ElementUI);
Vue.use(VueCookie)
Vue.prototype.$message = function (msg) {
    ElementUI.Message({
        ...msg,
        duration: 1000
    })
}