import { DriveFolderUploadOutlined } from '@mui/icons-material';
import React, { useState } from 'react'
import { Navbar } from '../../components/navbar/Navbar';
import { Sidebar } from '../../components/sidebar/Sidebar';
import './new.scss';

export const New = ({ inputs, title }) => {

  const [file, setFile] = useState("");
  console.log(file)

  return (
    <div className='new'>
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img src={
              file
                ? URL.createObjectURL(file)
                : "https://xflavors.net/_xfbr/images/no-image.jpg"} alt="" />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                Image: <label htmlFor='file'><DriveFolderUploadOutlined className='icon' /></label>
                <input
                  type="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  id="file"
                  style={{ display: "none" }} />
              </div>
              {inputs.map(input => (
                <div className='formInput' key={input.id}>
                  <label>{input.label}</label>
                  <input type={input.type} placeholder={input.placeholder} />
                </div>)
              )}

              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
