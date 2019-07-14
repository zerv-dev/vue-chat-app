const express = require('express');
const app = express();


const port = process.env.PORT || 8081;

const server = app.listen(port, function() {
    console.log(`Server started on port ${port}`)
});

const io = require('socket.io')(server)



io.on('connection', function(socket) {
    console.log(socket.id)
    socket.on("SEND_MESSAGE",(data)=>{
        console.log(data)
        io.emit('MESSAGE', data)
    })
        
});
