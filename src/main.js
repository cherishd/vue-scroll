import Vue from 'vue'
import App from './App.vue'
import ScrollTop from './scroll-out'

Vue.use(ScrollTop)

new Vue({
  el: '#app',
  render: h => h(App)
})
