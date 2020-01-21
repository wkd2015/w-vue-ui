import './style/index.scss'
import Vue from 'vue'
import Demo from './Demo.vue'
import WVUI from './index'

Vue.config.productionTip = false
Vue.use(WVUI)

new Vue({
  render: h => h(Demo)
}).$mount('#app')
