require('dotenv').config()
const express = require('express')
const app = express()
const userRouter = require('./routes/userRouter')
const admRouter = require('./routes/adminRouter')
const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost/login").then(()=>{
    console.log('MongoDB conectado...')
}).catch((error)=>{
    console.log(error)
})


app.use('/user', express.json(), userRouter)

app.use('/admin',express.json(), admRouter)


app.listen(process.env.PORT, ()=>{ console.log('Server is Running...') })