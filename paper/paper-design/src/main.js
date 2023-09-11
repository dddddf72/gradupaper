import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import ElementUI from 'element-ui'
import './assets/theme/index.css'
import axios from 'axios'
import VueCookie from 'vue-cookie'
import animate from 'animate.css'
import Antd from 'ant-design-vue';
import '@vant/touch-emulator';
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload,{
  preLoad:1.3,
  loading:require('./assets/loading.gif'),
attempt:1
})
Vue.use(Antd);
import 'ant-design-vue/dist/antd.css';
Vue.use(animate)
Vue.use(ElementUI)
Vue.use(VueCookie)
Vue.config.productionTip = false
axios.defaults.baseURL = 'http://124.70.164.225:7001'
axios.defaults.withCredentials = true;
Vue.prototype.$http = axios;

/* 全局过滤器开始 */
Vue.filter("handleStr", (val) => {/* 字符长度过滤 */
  if (val.length > 7) {
    return val.slice(0, 5) + "..."
  } else {
    return val
  }
})

Vue.filter('handletitle', (val) => {/* 分类名称过滤 */
  var str = [];
  var arr = [
    {m:'classify01',title:'马克思主义、列宁主义、毛泽东思想、邓小平理论'},
    {m:'classify02',title:'环境科学，安全科学'},
    {m:'classify03',title:'航空、航天'},
    {m:'classify04',title:'政治、法律'},
    {m:'classify05',title:'工业技术'},
    {m:'classify06',title:'农业科学'},
    {m:'classify07',title:'生物科学'},
    {m:'classify08',title:'自然科学总论'},
    {m:'classify09',title:'数理科学和化学'},
    {m:'classify10',title:'历史、地理'},
    {m:'classify11',title:'交通运输'},
    {m:'classify12',title:'综合性图书'},
    {m:'classify13',title:'语言、文字'},
    {m:'classify14',title:'医药、卫生'},
    {m:'classify15',title:'天文学、地球科学'},
    {m:'classify16',title:'文学'},
    {m:'classify17',title:'艺术'},
    {m:'classify18',title:'文化、科学、教育、体育'},
    {m:'classify19',title:'军事'},
    {m:'classify20',title:'经济'},
    {m:'classify21',title:'哲学、宗教'},
    {m:'classify22',title:'社会科学总论'},
    {m:'无结果',title:'无结果'},
  ]
  arr.forEach(item => {
    if (val == item.m) {
      str.push(item.title)
    }
  })
  return str[0];
})
/* 全局过滤器结束 */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')