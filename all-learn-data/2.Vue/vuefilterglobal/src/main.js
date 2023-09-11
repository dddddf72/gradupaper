import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
// 全局过滤器,不需要导入
import './filters/index'
new Vue({
  render: h => h(App),
}).$mount('#app')
