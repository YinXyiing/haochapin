import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
// import echarts from 'echarts'
import 'normalize.css'
import 'element-ui/lib/theme-chalk/index.css'

// Vue.prototype.$echarts = echarts

Vue.config.productionTip = false
// Vue.use(Echarts)
Vue.use(ElementUI)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
