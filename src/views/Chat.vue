<template>
    <div class="container-fluid">
		<Navbar></Navbar>
		<div class="row">
				<div class="col-12">
					<div class="chat-container">
						<div ref="messageArea" class="message-area">	
							<div  class="message" v-for="(message, index) in messages" :key="`message-${index}`" >
									<div class="message__text" 	:class="[message.username == username? 'ml-auto' : '']" > {{message.message}}</div>
									<div class="p-2 text-black-50 "	:class="[message.username == username? 'float-right' : 'float-left']">username: {{message.username}}</div>
							</div>
						</div>
						<form @submit.prevent="addMessage" class="message-form">
							<input class="w-75" v-model="currentMessage" type="text" placeholder="Enter a message" >
							<button  class="btn btn-primary ml-4" :disabled="!currentMessage" type="submit"> Send</button>
						</form>
					</div>
				</div>
			</div>
	</div>
</template>
<script>
import {mapState} from 'vuex'
import Navbar from './../components/Navbar'

import io from 'socket.io-client';
export default {
    name: 'Chat',
		components:{
        Navbar
    },
    mounted() {
        this.socket.on('MESSAGE', (data) => {
		this.messages.push(data)
        });
    },
	data() {
		return {
			messages:[],
			currentMessage:'',
			socket: io('localhost:8081'),
            // username:'jeff'
		}
	},
	methods:{
		addMessage(){
			if(this.currentMessage !== ''){
				let data = {
					message: this.currentMessage,
					username:this.username
				}
				this.socket.emit("SEND_MESSAGE",data)
				this.currentMessage = ''
				let messageArea = this.$refs.messageArea
				messageArea.scrollTop = messageArea.scrollHeight;
			}
		}
	},
		computed:{
		...mapState(['username'])
	},
}
</script>