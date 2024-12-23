const express =require('express')

const http = require('http')
const { Server } = require('socket.io')
const  Socket = require('socket.io').Server



const app = express()
const server = http.createServer(app)
const io = new Server(server,{
    cors:{
        origin: "*",
        methods: ["GET", "POST"],
        credentials: true
    }
})

io.on("connection",(socket)=>{
    console.log("connection established")
socket.on("listen",chat =>{
    io.emit("listen",chat)
})


    socket.on("disconnect",()=>{
        console.log("connection temporaray out of service")
    })
})




server.listen(8080,()=> console.log('i m listening to your port'))