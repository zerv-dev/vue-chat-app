<template>
    <div>
        <div class="createRoomModal" v-if="displayModal">
            <div class="createRoomModal__header">
                Create a new chatroom
            </div>
            <div class="createRoomModal__content">
                    <div class="form-group">
                        <label for="">Chat name</label>
                        <input v-model="name" class="form-control">
                    </div>
            </div>
            <div class="createRoomModal__footer">   
                <button class="btn btn-danger" @click="closeModal()">Cancel</button> 
                <button class="btn btn-primary" @click="submitChat()">Submit</button>
            </div>
        </div>
        <button class="btn btn-primary " @click="openModal()">
            <slot></slot>
        </button>
    </div>
</template>

<script>

import axios from 'axios'
import { mapState,mapActions } from 'vuex';
export default {
    name:"CreateChatModal",
    data:function() {
        return{
            name:'',
            participatants:[],
            displayModal:true
        }
    },
    methods:{
        ...mapActions(['addChat']),
        submitChat(){
            this.participatants.push(this.username)
            axios.post('http://localhost:8081/api/room',{
                name:this.name,
                participants:[this.username]
            }).then((response)=>{
                console.log(response)
                this.addChat(response.data.room)
            })
            this.closeModal()
        },
        openModal(){
            this.displayModal = true
        },
        closeModal(){
            this.displayModal = false
        }
    },
    computed:{
        ...mapState(['username'])
    }


};
</script>

<style>
</style>