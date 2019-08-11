const mongoose = require('mongoose');
const RoomSchema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    name:{
        type:String,
        required:true
    },
    participants:{
        type:[String],
        required:true
    },
    messages:{
        type:[String],
        required:true
    },
    admins:{
        type:[String],
        required:true
    }
})

module.exports= mongoose.model('Room',RoomSchema);