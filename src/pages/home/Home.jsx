import React from 'react';
import './home.scss';
import {Sidebar} from '../../components/sidebar/Sidebar';
import { Navbar } from '../../components/navbar/Navbar';

export const Home = () => {
  return (
    <div className='home'>
      <Sidebar></Sidebar>
      <div className="homeContainer">
      <Navbar/>
        Container
      </div>
    </div>
  )
}
