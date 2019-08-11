import router from './../router/index'
export default{
    submitUser({commit},payload){
        commit('SUBMIT_USER',payload)
        router.push('/')
    }
}