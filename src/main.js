import Vue from 'vue'
import App from './App.vue'
import loading from './package/index.js'

Vue.use(loading);

new Vue({
  el: '#app',
  render: h => h(App)
})
