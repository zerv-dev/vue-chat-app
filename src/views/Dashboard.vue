<template>
    <div class="container">
		<Navbar></Navbar>
		<div class="row">
			<div class="col-3 p-0">
				<button class="btn btn-primary">Create new chat</button>
				<div class="chat-list">
					<div v-for="chat in chats">
						<div class="chat-card" @click="selectChat(chat)">
							<span class="chat-card__name">{{chat.name}}</span>
						</div>
					</div>
				</div>
			</div>
			<div class="col-9 p-0">
				<Chat/>
			</div>
		</div>
	</div>
</template>
<script>
import {mapState,mapActions} from 'vuex'
import Navbar from './../components/Navbar'
import Chat from './../components/Chat'
import axios from 'axios'
export default {
    name: 'Dashboard',
		components:{
		Navbar,
		Chat
    },
    mounted() {
        axios.get('http://localhost:8081/api/room/',{
            params: {
                _id: this.id
            }
        }).then(response=>{
			let chat = response.data.chats
			this.fetchChats(chat)
        })
    },
	data() {
		return {
		}
	},
	methods:{
		...mapActions(['fetchChats','setSelectedChat']),
		selectChat(chat){
			console.log(chat)
			this.setSelectedChat(chat)

		}
		
	},
		computed:{
		...mapState(['username','id','chats'])
	},
}
</script>