import Vue from 'vue';
import VueRouter from 'vue-router'
import Chat from './../views/Chat'
import Login from './../views/Login'
// import { nextTick } from 'q';
Vue.use(VueRouter)
const router = new VueRouter({
    routes: [
		{ 
			path: '/', 
			component: Chat,
		},
		{ 
			path: '/login',
			component: Login,
		}
	],
})
export default router;