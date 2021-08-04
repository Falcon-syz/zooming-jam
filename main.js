import Vue from 'vue'
import App from './App'


import uView from 'uview-ui';
Vue.use(uView);

import store from '@/store';

const db = uniCloud.database();
Vue.prototype.$db = db
	
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
	store,
    ...App
})
app.$mount()
