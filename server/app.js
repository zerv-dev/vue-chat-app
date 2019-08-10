const express = require('express');
const app = express();
const user = require('./routes/user')
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const cors = require('cors')
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
app.use('/api/user',user)


mongoose.connect('mongodb+srv://zane:data@cluster0-prcql.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true })

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
    socket.on("NEW_USER",(data)=>{
        console.log(data)
    })
});
