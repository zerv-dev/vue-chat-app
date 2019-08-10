import router from './../router/index'
export default{
    submitUser({commit},payload){
        commit('SUBMIT_USER',payload)
        console.log('oof')
    router.push('/')
    }
}