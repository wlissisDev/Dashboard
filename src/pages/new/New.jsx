import { DriveFolderUploadOutlined } from '@mui/icons-material';
import React from 'react'
import { Navbar } from '../../components/navbar/Navbar';
import { Sidebar } from '../../components/sidebar/Sidebar';
import './new.scss';

export const New = () => {
  return (
    <div className='new'>
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Add New User</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img src="https://xflavors.net/_xfbr/images/no-image.jpg" alt="" />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
               Image: <label htmlFor='file'><DriveFolderUploadOutlined className='icon'/></label>
                <input type="file" id="file" style={{display:"none"}} />
              </div>
              <div className="formInput">
                <label>Username</label>
                <input type="text" placeholder='jonh_doe' />
              </div>
              <div className="formInput">
                <label>Name and surname</label>
                <input type="text" placeholder='jonh doe' />
              </div>
              <div className="formInput">
                <label>Email</label>
                <input type="email" placeholder='jonh_doe@gmail.com' />
              </div>
              <div className="formInput">
                <label>Phone</label>
                <input type="text" placeholder='+55 4451 1545' />
              </div>
              <div className="formInput">
                <label>Password</label>
                <input type="password" />
              </div>
              <div className="formInput">
                <label>Address</label>
                <input type="password" placeholder='R sant new 554. NewYork' />
              </div>
              <div className="formInput">
                <label>Country</label>
                <input type="password" placeholder='USA' />
              </div>
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
