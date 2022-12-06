import React from 'react'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import './navbar.scss'
export const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className='search'>
          <input type="text" placeholder='Search...' />
          <SearchOutlinedIcon />
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlinedIcon />
            English
          </div>
          <div className="item">
            <DarkModeOutlinedIcon />
          </div>
          <div className="item">
            <NotificationsNoneOutlinedIcon />
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlinedIcon />
          </div>
          <div className="item">
            <ListAltOutlinedIcon />
          </div>
        </div>
      </div>
    </div>
  )
}
