<template>
    <div class="row justify-content-center">
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
            </form>
        </div>
    </div>
</template>
<script>
import {mapActions} from 'vuex'
export default {
    name:"Login",
    data:function(){
        return{
        username:''
    }},
    methods:{
        submitform(){
            if(this.username){
                this.submitUser(this.username)
            this.$router.push('/')
            }else{
                alert('please submit a username')
            }
        },
        ...mapActions(['submitUser'])
    }
    
}
</script>
