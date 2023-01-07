import { Avatar, IconButton } from '@material-ui/core'
// import {SearchOutlined} from '@material-ui/icons'
import React, { useState } from 'react'
import "../css/Chats.css"
import axios from '../axios'

const Chats = ({ messages }) => {
  const [input, setInput] = useState("")

  const sendMessage = async (e) =>{
    e.preventDefault();
    await axios.post('/messages/new', {
      message:input,
      name:"nirbhay",
      timestamp:"Just now",
      recieved:false
    })
    setInput("")
  }
  return (
    <div className='chat'>
      <div className="chat__header">
        <Avatar />

        <div className="chat__headerInfo">
          <h3>Room name</h3>
          <p>Last seen at...</p>
        </div>
        <div className="chat__headingRight">
          <IconButton>
            {/* <SearchOutLined/> */}
          </IconButton>

          <IconButton>
            {/* <SearchOutLined/> */}
          </IconButton>

          <IconButton>
            {/* <SearchOutLined/> */}
          </IconButton>
        </div>
      </div>
      <div className="chat__body">

        {messages.map((message, id) => (
          <p className={`chat__message ${message.recieved && "chat__reciever"} `}>
            <span className='chat__name'>{message.name}</span>
            {message.message}
            <span className='chat__timestamp'>
              {message.timestamp}
            </span>
          </p>
        ))}
      </div>
      <div className="chat__footer">
        {/* <InsertEmoticonIcon /> */}
        <form>
          <input value={input} onChange={(e)=>setInput(e.target.value)} type="text" name="" id="" placeholder='type a message' />
          <button type='submit' onClick={sendMessage}>Send a message</button>
        </form>
        {/* <MicIcon /> */}
      </div>
    </div>
  )
}

export default Chats
