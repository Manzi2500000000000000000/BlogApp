import React from 'react';
import "./Settings.css"
import Sidebar from '../../sidebar/Sidebar';
import Blue from "./pale.jpg";
import { FaUser } from "react-icons/fa";


export default function Settings() {
  return (
    <div className='settings'>
      <div className="settingsWrapper">
        <div className="settingsTitle">
            <span className="settingsUpdateTitle">Update Your Account</span>
            <span className="settingsDeleteTitle">Delete Account</span>
        </div>
        <form className="settingsForm">
            <label>Profile Picture</label>
            <div className="settingsPP">
                <img src={Blue} className='settingsPP1' />
                <label htmlFor="fileInput">
                <FaUser className='settingsPPIcon'/>

                </label>
                <input type="file" id='fileInput' style={{display:'none'}} />
            </div>
            <label>Username</label>
            <input type="text" placeholder='Safari' />
            <label>Email</label>
            <input type="email" placeholder='Safari@gmail.com' />
            <label>Password</label>
            <input type="password" placeholder='Safari' />
            <button className="settingsSubmit">Update</button>
        </form>
      </div>
        <Sidebar/>
      
    </div>
  );
}
