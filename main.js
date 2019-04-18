import Vue from 'vue'
import App from './App'
import store from './vuex/store'

import uniIcon from '@dcloudio/uni-ui/lib/uni-icon/uni-icon.vue'
Vue.component('uni-icon', uniIcon)

Vue.config.productionTip = false
Vue.prototype.$store = store
App.mpType = 'app'

const app = new Vue({
	...App,
	store
})
app.$mount()
