// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Axios from './axios'
import router from './router'
// import iView from 'iview'
import store from './store'
import lazyload from 'vue-lazyload'
import 'iview/dist/styles/iview.css';
import './common/style/all.css'
import './common/style/reset.css';
import './common/style/animate.css';
import Format from "common/js/time.js";
import qs from 'qs';
import '@/mock'
// Vue.use(iView)

Vue.config.productionTip = false
Vue.prototype.$axios = Axios
Vue.prototype.$qs = qs
Vue.use(lazyload, {
  error: require('@/assets/error.jpg'),
  loading: require('@/assets/lazyload.gif'),
  attempt: 1
})

Vue.filter('formatDate', (time, fmt) => {
  var now = new Date(time);
  var nowStr = now.Format(fmt);
  // console.log(nowStr);
  return nowStr;
})

router.afterEach((to, from, next) => {
  window.scrollTo(0, 0);
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
