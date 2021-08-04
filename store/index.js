import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		vuex_tabbar: [{
				iconPath: "/static/tabs/pick.png",
				selectedIconPath: "/static/tabs/pick-active.png",
				pagePath: "/pages/pick/pick"
			},
			{
				iconPath: "/static/tabs/make.png",
				selectedIconPath: "/static/tabs/make-active.png",
				pagePath: "/pages/make/make"
			},
			{
				iconPath: "/static/tabs/open.png",
				selectedIconPath: "/static/tabs/open-active.png",
				pagePath: "/pages/open/open"
			},
		]
	}
})

export default store
