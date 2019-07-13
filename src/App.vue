<template>
	<div id="app">
	<img alt="Vue logo" src="./assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
		<div class="container ">
			<div class="row">
				<div class="col-12">
					<form>
						<label for="username">usernamed</label>
						<input id="username" v-model="username" type="text">
					</form>
					<div class="chat-container">
						<div ref="messageBox" class="message-box">
							
						<div v-for="(element, index) in messages" :key="`message-${index}`" >
							<span class="p-2">{{element}}</span>
						</div>
						</div>
						<form @submit.prevent="addMessage" class="message-group">
							<input v-model="currentMessage" type="text" placeholder="Enter a message" >
							<button :disabled="!		currentMessage" type="submit"> Send</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

export default {
	name: 'app',
	components: {
	},
	data() {
		return {
			messages:[],
			currentMessage:'',
			username:''
		}
	},
	methods:{
		addMessage(){
			if(this.currentMessage !== ''){
				this.messages.push(this.currentMessage + "  " + this.username)
				this.currentMessage = ''
				let messageBox = this.$refs.messageBox
				messageBox.scrollTop = messageBox.scrollHeight;
			}
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
