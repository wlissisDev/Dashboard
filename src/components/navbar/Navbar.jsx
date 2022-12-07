import React from 'react'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import './navbar.scss'

import { useContext } from "react";
import { DarkModeContext } from '../../context/darkModeContext'

export const Navbar = () => {
  const { dispatch } = useContext(DarkModeContext)

  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className='search'>
          <input type="text" placeholder='Search...' />
          <SearchOutlinedIcon className='icon' />
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlinedIcon className='icon' />
            English
          </div>
          <div className="item">
            <DarkModeOutlinedIcon
              className='icon'
              style={{ cursor: "pointer" }}
              onClick={() => dispatch({ type: "TOGGLE" })} />
          </div>
          <div className="item">
            <NotificationsNoneOutlinedIcon className='icon' />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlinedIcon className='icon' />
            <div className="counter">2</div>
          </div>
          <div className="item">
            <ListAltOutlinedIcon className='icon' />
          </div>
          <div className="item">
            <img src="https://img.freepik.com/vetores-premium/personagem-de-perfil-masculino-fofo-de-desenho-animado_539226-21.jpg?w=2000" alt="avatar"
              className='avatar' />
          </div>
        </div>
      </div>
    </div>
  )
}
