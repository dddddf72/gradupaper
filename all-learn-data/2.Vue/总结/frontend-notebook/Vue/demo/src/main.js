import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import './filters/index'
Vue.prototype.$http = axios;
new Vue({
  render: h => h(App),
}).$mount('#app')
