const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    id:{
        type:Number,
        required:true
    },
    name:{
       type:String,
       required:true
    },
    price:{
       type:String,
       required:true
    },
    category:{
        type:String,
        required:true
    }
},{
    timestamps:true
})

const bookModel = mongoose.model('books',bookSchema)

module.exports=bookModel