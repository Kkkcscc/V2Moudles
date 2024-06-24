import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
Vue.config.productionTip = false
import ElementUI from 'element-ui';
Vue.use(ElementUI);
import 'element-ui/lib/theme-chalk/index.css';
import axios from "axios";
Vue.prototype.$axios = axios;
import {apiGet,apiPost} from './api/api.js';
Vue.prototype.$apiGet  = apiGet
Vue.prototype.$apiPost = apiPost
import * as echarts from 'echarts';
Vue.prototype.$echarts = echarts
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
