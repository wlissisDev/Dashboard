import React from 'react'
import './list.scss';
import {Navbar} from '../../components/navbar/Navbar'
import {Sidebar} from '../../components/sidebar/Sidebar'

export const List = () => {
  return (
    <div className='list'>
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
      </div>
    </div>
  )
}

