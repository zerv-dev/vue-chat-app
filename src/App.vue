<template>
	<div id="app">
		<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css" integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossorigin="anonymous">
			<router-view></router-view>
	</div>
</template>

<script>
import {mapState} from 'vuex'
export default {
	name: 'app',
	components: {
		// Chat
	},
	data() {
		return {
		}
	},
	methods:{
	},
	computed:{
		...mapState(['username'])
	},
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	/* margin-top: 60px; */
}
</style>
