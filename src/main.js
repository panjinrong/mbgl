// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
require('./assets/icomoon/style.css');
require('lrz/dist/lrz.bundle.js');
import echarts from 'echarts'
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import swpie from 'photoswipe'
import promise from 'es6-promise'
import 'photoswipe/dist/photoswipe.css'
import 'photoswipe/dist/default-skin/default-skin.css'
import picker from 'vue-3d-picker';
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
// import jquery from 'jquery'
import axios from 'axios';
import store from '@/vuex/store'

Vue.config.productionTip = false
promise.polyfill();
Vue.component(picker.name, picker);
Vue.use(MintUI);
// Vue.use(Vuex);
Vue.use(require('vue-wechat-title'))
Vue.prototype.$echarts = echarts
Vue.prototype.$http = axios
router.beforeEach((to, from, next) => {
	if(sessionStorage.getItem("userinfo")){
		next()
	}else{
		if( to.path == '/college'){
			var userinfo = JSON.stringify(to.query); 
			sessionStorage.setItem("userinfo",userinfo)
			next();
		}else{
			alert("您的身份信息过期请从进！！！");
			axios.get('http://www.close.com');
		}
	}
    // if (to.meta.requireAuth) {  
    //     if (store.state.token) {  
    //         next();
    //     }
    //     else {
    //         next({
    //             path: '/login',
    //             query: {redirect: to.fullPath} 
    //         })
    //     }
    // }
    // else {
    //     next();
    // }
})
// Vue.prototype.$jquery=jquery
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
