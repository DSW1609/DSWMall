import Vue from 'vue'
import App from './App.vue'
import router from './router'
import animate from "animate.css";
import store from './store'

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()

new Vue({
  render: h => h(App),
  router,
  store,
  animate
}).$mount('#app')
