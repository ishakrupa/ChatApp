import React, { useState } from 'react'
import _ from "lodash"
import {CommentOutlined} from "@ant-design/icons"
const button ={
  width:"50%",
  height:50,
  fontWeight:"bold",
  borderRadius:10,
  fontSize:18,
  backgroundColor:"maroon",
  borderWidth:0,
  color:"white",
  margin:10
}
export default function User({setUser}) {
  const[user,setAUser]=useState('')

function handleSubmit(){
  if(!user) 
    return ;
   localStorage.setItem("user",user)
  setUser(user)
  localStorage.setItem("avatar",`https://picsum.photos/id/${_.random(1,20)}/200/300`)
}



  return (
    <div>
     <h1 style={{margin:10,textAlign:"center"}}><CommentOutlined color={'green'}/>SuperChat</h1>
     <input type="text" style={{width:"25%",height:30,borderRadius:10,borderWidth:20,fontSize:18}} value={user} onChange={e=>setAUser(e.target.value)} placeholder='write your login name'/>
     <button style={button} onClick={()=>handleSubmit()}>Login</button>
    </div>
  )
}
