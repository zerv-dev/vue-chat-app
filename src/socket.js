import io from 'socket.io-client';
let socket = io('localhost:8081');

// socket.on('MESSAGE', (data) => {
//     this.messages.push(data)
// });


export default socket;