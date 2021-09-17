import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./assets/iconfont/iconfont.css";
import 'swiper/dist/css/swiper.css';

import { toast } from './toast/toast'
Vue.prototype.$toast = toast
// 滚动加载插件
import infiniteScroll from 'vue-infinite-scroll'
Vue.use(infiniteScroll)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
