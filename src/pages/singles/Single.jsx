import React from 'react'
import './single.scss';

import { Sidebar } from '../../components/sidebar/Sidebar'
import { Navbar } from '../../components/navbar/Navbar'


export const Single = () => {
  return (
    <div className='single'>
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <h1 className="title">Information</h1>
            <div className="item">
              <img src="https://i.pinimg.com/550x/9a/a6/d1/9aa6d11d54b92f7890c8ff997c47d691.jpg" alt="" className="itemImg" />
              <details></details>
            </div>

          </div>
          <div className="right"></div>
        </div>

      </div>
    </div>
  )
}
