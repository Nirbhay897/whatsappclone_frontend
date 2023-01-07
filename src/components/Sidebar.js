import React from 'react'
import '../css/Sidebar.css'
import { IconButton, Avatar } from "@material-ui/core"
import SidebarChat from './SidebarChat'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebar__header">
    <div className="sidebar__headerRight">

    <Avatar src='' />
   {/* <IconButton>
        <DonutLargeIcon />
     </IconButton>

   <IconButton>
        <ChatIcon />
     </IconButton>

   <IconButton>
        <Moreverticon />
     </IconButton> */}
</div>
      </div>
      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
        {/* <SearchOutLined /> */}
            <input type="text" placeholder='Search a new chat' />
        </div>
      </div>
      <div className="sidebar__chats">
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
      </div>
    </div>

  )
}

export default Sidebar
