<template>
    <div class="container">
		<Navbar></Navbar>
		<div class="row">
				<div class="col-12">
				</div>
			</div>
	</div>
</template>
<script>
import {mapState} from 'vuex'
import Navbar from './../components/Navbar'

import io from 'socket.io-client';
import axios from 'axios'
export default {
    name: 'Dashboard',
		components:{
        Navbar
    },
    mounted() {
        axios.get('http://localhost:8081/api/room/',{
            params: {
                _id: this.id
            }
        }).then(response=>{
            console.log(response)
            })
    },
	data() {
		return {
		}
	},
	methods:{
	},
		computed:{
		...mapState(['username','id'])
	},
}
</script>