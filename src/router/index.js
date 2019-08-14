import Vue from 'vue';
import VueRouter from 'vue-router'
import Chat from './../views/Chat'
import Login from './../views/Login'
import SignUp from './../views/SignUp'
import Dashboard from './../views/Dashboard'
import store from './../store/index'
Vue.use(VueRouter)
const router = new VueRouter({
    routes: [
		{ 
			path: '/', 
			component: Dashboard,
			meta:{
				requiresAuth: true  		
			}
		},
		{ 
			path: '/login',
			component: Login,
		},
		{
			path: '/signup',
			component:SignUp
		}
	],
})


router.beforeEach((to, from, next)=>{
	if (to.meta.requiresAuth) {
		if (!store.state.username) {
			next({ path: '/login' })
		}else {
			next()
		}
	} else {
		next()
	}
});
export default router;