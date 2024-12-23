
import { message } from "antd";
import React, { useState } from "react";

const style = {
  button: {
    width: "8%",
    height: 50,
    fontweight: "bold",
    borderRadius: 10,
    fontSize: 18,
    backgroundColor: "blue",
    borderWidth: "2px",
    color: "#fff",
  
  },
  textarea: {
    width: "60%",
    height: 50,
    borderRadius: 10,
    borderWidth: "2px",
    padding: "5px",
    fontSize: 18,
  },
  textContainer: {
    display: "flex",

    justifyContent: "center",
    alignItems: "center",


  }
};

export default function Inputtext({addMsg}) {
    const[message,setMessage] =useState('')
    const AddMessage = () => { console.log('Message input value:', message); addMsg(message); setMessage(''); };
  return (
    <div style={style.textContainer}>
<textarea rows={6} style={style.textarea} value={message} onChange={e=>setMessage(e.target.value)} placeholder="Type here something"/>
    <button style={style.button} onClick={()=>AddMessage()}>Send</button>

    </div>
  )
}
