import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '../src/assets/css/main.css'
import '../src/assets/js/main.js'
import '../src/assets/css/estilo1.css'
import '../src/assets/css/compasivo.css'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
