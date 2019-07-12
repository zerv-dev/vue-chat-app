require('bootstrap')
import Vue from 'vue'
import App from './App.vue'
import './scss/app.scss'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
