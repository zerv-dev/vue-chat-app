<template>
    <div class="container">
        <div class="row justify-content-center mt-5">
            <div class="col-12 col-sm-10 col-lg-6">
                <form @submit.prevent="submitform">
                    <div class="form-group">
                        <label for="username">username</label>
                        <input type="userame" placeholder="username" class="form-control" v-model="username">
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
                    </div>
                    <button type="submit" class="btn btn-primary">Login</button>
                    <router-link to='/signup'>
                        <p class="signup-link">Don't have an account? Click here to Sign up</p>
                    </router-link>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
import {mapActions} from 'vuex'
import axios from 'axios'
import { log } from 'util';
export default {
    name:"Login",

    data:function(){
        return{
        username:''
    }},
    methods:{
        submitform(){
             axios.post('http://localhost:8081/api/user/login',{
                username:this.username,
                password:this.password,
            }).then((response)=>{
                console.log(response);
                
                let payload= {
                    username:response.data.username,
                    id:response.data.id
                }
                this.submitUser(payload)
            }).catch((response)=>{
                // errors

                // eslint-disable-next-line
                console.log(response)
            })
        },
        ...mapActions(['submitUser'])
    }
    
}
</script>
