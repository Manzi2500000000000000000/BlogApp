import React from 'react';
import "./TopBar.css";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import image from "./obama.jpg";
import { Link } from 'react-router-dom';



export default function TopBar() {
  const user = false;
  return (
    <div className='top'>
      <div className="topLeft">
      <FaFacebook className='topIcon' />
      <FaSquareXTwitter className='topIcon'/>
      <FaPinterest className='topIcon'/>
      <AiFillInstagram className='topIcon' />



      </div>
      <div className="topCenter">
      <ul className="toplist">
        <li className="topListItem"><Link className='link' to="/">HOME</Link></li>
        <li className="topListItem">ABOUT</li>
        <li className="topListItem">CONTACT</li>
        <li className="topListItem"><Link  className="link" to="/write">WRITE</Link></li>
        <li className="topListItem">
          {user && "LOGOUT"}
        </li>
        
      </ul>

      </div>
      <div className="topRight">
        {
          user ? (
            <img src={image} className='topImg'/>
       
         ) : (
            <ul className="toplist">
            <li className="topListItem"><Link className='link' to="/register">REGISTER</Link></li>
            <li className="topListItem"><Link className='link' to="/login">LOGIN</Link></li>
            </ul>
          )}
        
        
<FaSearch className='SearchIcon'/> 
      </div>
    </div>
  );
}
