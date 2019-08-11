const SUBMIT_USER=(state,payload)=>{
    state.username = payload.username,
    state.id = payload.id
}


export default{
    SUBMIT_USER
}