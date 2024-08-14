const cookieParser = require('cookie-parser')
const express = require('express')
const mongoose =require('mongoose')
const bookRouter = require('./routes/bookRoute')
const router = require('./routes/userroute')
var cors = require('cors')
const app = express()

mongoose.connect('mongodb://127.0.0.1:27017/book_store').then(()=>{
    console.log('DB connected')
    app.listen(3000,()=>{
        console.log('Server started on port 3000')
    })
})


const corsOptions = {
    origin: 'http://localhost:5173', 
    credentials: true,
};
app.use(cors(corsOptions))
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(cookieParser())


app.use('/',router)
app.use('/',bookRouter)

