const mongoose = require('mongoose')

const PostSchema = mongoose.Schema({
    // _id:{
    //     type: Number,
    //     required: true
    // },
    // title: { 
    //     type: String,
    //     required: true
    // },
    // description: {
    //     type: String,
    //     required: true
    // },
    // date: {
    //     type: Date,
    //     default: Date.now
    // }
    test:{
        type: Number,
        required: true
    }
    // id: {

    // }
})

module.exports = mongoose.model('asdasd', PostSchema)