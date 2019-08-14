import router from './../router/index'

export default{
    submitUser({commit},payload){
        commit('SUBMIT_USER',payload)
        router.push('/')
    },
    fetchChats({commit},payload){
        commit('SET_CHATS',payload)
    },
    setSelectedChat({commit},payload){
        commit('SET_CURRENT_CHAT',payload)
        
    },
    addChat({commit},payload){
    commit('ADD_CHAT',payload)
    },
    removeChat({commit},payload){
        commit('REMOVE_CHAT',payload)
    }
}