<template>
	<div id="app">
		<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css" integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossorigin="anonymous">
		<div  class="container ">
			<form class="row usernameForm" v-if="!userNameHasBeenSubmitted || editUsername" @submit.prevent="submitUsername">
				<label for="username">username</label>
				<input id="username" v-model="username" type="text">
				<button :disabled="!username.length || username.length > 50"  class="btn btn-primary" type="submit">Submit Username</button>
				<div v-if="username.length > 50" class="text-danger">Username cant be onger thain 50 characters</div>
            </form>
			<div class="mb-2" v-else>
				<strong>{{username}}</strong> <i @click="editUsername= true" class="fas fa-pencil-alt fa-lg ml-4"></i>
			</div>
			<Chat v-if="userNameHasBeenSubmitted"  :username="username" ></Chat>
			
		</div>
	</div>
</template>

<script>
import Chat from "./components/Chat";
export default {
	name: 'app',
	components: {
		Chat
	},
	data() {
		return {
			userNameHasBeenSubmitted: false,
			editUsername:false,
			username:''
		}
	},
	methods:{
	submitUsername(){
		this.userNameHasBeenSubmitted = true
		this.editUsername = false;
	}
	}
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
