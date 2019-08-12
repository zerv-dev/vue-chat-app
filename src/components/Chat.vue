<template>
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
</template>
<script>
import io from 'socket.io-client';
import socket from './../socket'
import {mapState} from 'vuex'
export default {
    name: 'Chat',
    // props:['username'],
    mounted() {
        socket.on('MESSAGE', (data) => {
		this.messages.push(data)
        });
    },
	data() {
		return {
			messages:[],
			currentMessage:'',
		}
	},
	computed:{
		...mapState(['username','selectedChat'])
	},
	watch:{
		selectedChat:function(newVersion,oldVersion){
			console.log('updating')
			socket.emit("JOIN",newVersion._id)
		}
	},
	methods:{
		addMessage(){
			if(this.currentMessage !== ''){
				let data = {
					message: this.currentMessage,
					username:this.username,
					id:this.selectedChat._id
				}
				socket.emit("SEND_MESSAGE",data)
				this.currentMessage = ''
				let messageArea = this.$refs.messageArea
				messageArea.scrollTop = messageArea.scrollHeight;
			}
		}
	}
}
</script>