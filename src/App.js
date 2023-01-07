
import { useEffect, useState } from 'react';
import './App.css';
import Chats from './components/Chats';
import Sidebar from './components/Sidebar';
import Pusher from 'pusher-js'
import axios from './axios'

function App() {

  const [messages, setMessage] = useState([])

  useEffect(()=>{
    axios.get('/messages/sync')
    .then(response=>{
        setMessage(response.data)
      })
  },[])

  useEffect(()=>{
    var pusher = new Pusher('c3ff5a1d36e779fe6c03', {
      cluster: 'ap2'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (newMessage)=> {
      // alert(JSON.stringify(newMessage));
      setMessage([...messages, newMessage] )
    });

    return ()=>{
      channel.unbind_all()
      channel.unsubscribe();
    }
  }, [messages])

  console.log(messages);
  return (
    <>
    <div className="app">
      <div className="app__body">
    <Sidebar/>
    <Chats messages={messages} />
      </div>
    </div>
    </>
  )
}
export default App;
