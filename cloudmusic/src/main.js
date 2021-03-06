// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

Vue.config.productionTip = false

axios.defaults.baseURL = process.env.API_ROOT;
//配置axios为全局属性
Vue.prototype.$axios = axios;

//优化css
import 'reset-css'
//载入字体库
import 'font-awesome/css/font-awesome.css'

//element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);


//图片懒加载
import VueLazyLoad from 'vue-lazyload'
Vue.use(VueLazyLoad, {
  preLoad: 1.3,
  error: '../static/images/error.png',
  loading: '../static/images/loading.gif',
  attempt: 1
})

/* eslint-disable no-new */
//加载仓库
import store from './store/index'
//注册全局mixin
import mixins from '@/mixins/index'
Vue.mixin(mixins);
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
