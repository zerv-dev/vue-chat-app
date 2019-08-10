<template>
    <div class="container">
        <div class="row justify-content-center mt-5">
            <div class="col-12 col-sm-10 col-lg-6">
                <form @submit.prevent="submitform">
                    <div class="form-group">
                        <label >Email</label>
                        <input type="email" placeholder="email" class="form-control" v-model="email">
                    </div>
                    <div class="form-group">
                        <label >username</label>
                        <input type="userame" placeholder="username" class="form-control" v-model="username">
                    </div>
                    <div class="form-group">
                        <label>Password</label>
                        <input @keydown.space.prevent type="password" class="form-control" v-model="password"  placeholder="Password">
                    </div>
                    <div class="form-group">
                        <label>Confirm Password</label>
                        <input type="password" class="form-control" v-model="confirmedPassword"  placeholder="Password">
                        <span v-if="confirmedPassword&&password != confirmedPassword" style="color:red">These passwords dont match</span>
                    </div>
                    <button type="submit" class="btn btn-primary">Login</button>
                    <router-link to='/login'>
                        <p class="signup-link">Already have an account? Click here to Log in</p>
                    </router-link>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
import {mapActions} from 'vuex'
import axios from 'axios'
    export default {
    name:"Login",

    data:function(){
        return{
        username:'',
        usernameValidationMessage:'',
        password:'',
        passwordValidationMessage:'',
        confirmedPassword:'',
        confirmedPasswordValidationMessage:'',
        email:'',
    }},

    methods:{
        submitform(){
            axios.post('http://localhost:8081/api/user/register',{
                username:this.username,
                password:this.password,
                email:this.email
            }).then((response)=>{
                this.submitUser(response.data.username)
                this.$router.push('/')
            }).catch((response)=>{
                console.log(response.data)
            })
        },
        ...mapActions(['submitUser'])
    }
    
}
</script>   
