import Vue from 'vue'
import App from './App.vue'
import Home from './Home.vue'
import axios from 'axios'
Vue.prototype.$http = axios;
Vue.config.productionTip = false
new Vue({
  render: h => h(App, Home),
}).$mount('#app')
