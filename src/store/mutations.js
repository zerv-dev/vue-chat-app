const SUBMIT_USER=(state,payload)=>{
    state.username = payload.username,
    state.id = payload.id
}

const SET_CHATS=(state, payload) =>{
    state.chats = payload
}

const SET_CURRENT_CHAT= (state,payload)=>{
    state.selectedChat = payload
}

export default{
    SUBMIT_USER,
    SET_CHATS,
    SET_CURRENT_CHAT
}