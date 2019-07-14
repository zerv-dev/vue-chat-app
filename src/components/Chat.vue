<template>
        <div class="row">
            <div class="col-12">
                <div class="chat-container">
                    <div ref="messageArea" class="message-area">	
                        <div  class="meesageBubble" v-for="(message, index) in messages" :key="`message-${index}`" >
                            <span class="p-2">username: {{message.username}}</span><br>
                            <span>message: {{message.message}}</span>							
                        </div>
                    </div>
                    <form @submit.prevent="addMessage" class="message-form">
                        <input class="w-75" v-model="currentMessage" type="text" placeholder="Enter a message" >
                        <button  class="btn btn-outline-info" :disabled="!currentMessage" type="submit"> Send</button>
                    </form>
                </div>
            </div>
        </div>
</template>
<script>
import io from 'socket.io-client';
export default {
    name: 'Chat',
    props:['username'],
    mounted() {
        this.socket.on('MESSAGE', (data) => {
		this.messages.push(data)
        });
    },
	data() {
		return {
			messages:[],
			currentMessage:'',
			// username:'',
			socket: io('localhost:8081')
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
	}
}
</script>